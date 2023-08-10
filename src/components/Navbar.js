import React, { useState } from "react";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if(window.scrollY >= 392) {
      setFix (true)
    } else {
      setFix (false)
    }
  }
  
  window.addEventListener("scroll", setFixed)
  return (
    <>
      <nav className={fix ? "navbar navbar-expand-lg navbar-light bg-white is-sticky" : "navbar navbar-expand-lg navbar-light bg-white"}>
        <div className="container">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Product">
                  Product
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
