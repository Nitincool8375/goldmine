import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Service from "../../components/Service";
// import BraandLogo from "../../components/BrandLogo"
import Footer from "../../components/Footer";
import "./about.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner name="About"/>
      <Service />

      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img
                src="./images/about/about-1.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4">
              <div className="about-content text-center">
                <h4>Know About Us?</h4>
                <h6>
                Gold mine Jewellers leading fine jewellery discovery platform focusing on giving YOU an awesome jewellery buying experience. We are not just selling jewellery, but an unparalleled jewellery buying experience at your fingertips!
                </h6>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quisnos trud exercitation ullamco
                  laboris nisi ut aliquip ex ea com modo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident.sunt in culpa
                  qui officia deserunt mollit anim id est laborum consectetur
                  adipiscing elit, sed do eiusmod tempor incid idunt ut labore
                  et dolore magna aliqua.
                </p> */}
              </div>
            </div>
            <div className="col-lg-4">
              <img
                src="./images/about/about-2.png"
                alt=""
                className="img-fluid"
              />
            </div>
            
          </div>
        </div>
      </section>

      <section className="our-team-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="product-section-heading">
                <h3>MEET OUR TEAM</h3>
                <p>
                  Our popular products are so beautyful to see that the shoppers
                  are easily attracted to them.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mt-50">
              <div className="card product-card-section bg-transparent">
                <div className="product-img">
                  <img
                    src="./images/about/team-member-1.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li >
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
                <div className="card-body">
                  <div className="member-bottomside">
                    <h6>Henry Todd</h6>
                    <p>Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-50">
              <div className="card product-card-section bg-transparent">
                <div className="product-img">
                  <img
                    src="./images/about/team-member-2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li >
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
                <div className="card-body">
                  <div className="member-bottomside">
                    <h6>Jamie McGuirk</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
              </div>
            </div><div className="col-md-3 mt-50">
              <div className="card product-card-section bg-transparent">
                <div className="product-img">
                  <img
                    src="./images/about/team-member-3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li >
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
                <div className="card-body">
                  <div className="member-bottomside">
                    <h6>Sebastian Goudie</h6>
                    <p>Sales Director</p>
                  </div>
                </div>
              </div>
            </div><div className="col-md-3 mt-50">
              <div className="card product-card-section bg-transparent">
                <div className="product-img">
                  <img
                    src="./images/about/team-member-4.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li >
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" tabindex="0">
                    <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
                <div className="card-body">
                  <div className="member-bottomside">
                    <h6>Bailey Beggs</h6>
                    <p>Support Guru </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <BraandLogo /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
