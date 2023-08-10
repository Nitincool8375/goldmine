import React from "react";

const Header = () => {
  return (
    <div className="container herader-section">
      <div className="row align-items-center">
        <div className="col-lg-3 col-6 order-1 order-lg-1">
          <a href="/">
            <img
              src="./images/logo.png"
              alt=""
              className="img-fluid"
              style={{ width: "120px" }}
            />
          </a>
        </div>
        <div className="col-lg-6 col-12 order-3 order-lg-2">
          <form className="Search-box">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="col-lg-3 col-6 order-2 order-lg-3 header-icons">
          <ul>
            <li>
              <a href="/wishlist">
                <i className="fa-regular fa-heart"></i>
                <span>0</span>
              </a>
            </li>
            <li>
              <a href="/shoppingCart">
                <i className="fa-solid fa-bag-shopping"></i>
                <span>0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
