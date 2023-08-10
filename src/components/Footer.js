import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="widgets widgets-footer row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-widget widget-info">
                <a href="/">
                  <img
                    src="./images/logo.png"
                    alt=""
                    className="img-fluid"
                    style={{ width: "120px" }}
                  />
                </a>
                <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                <div className="form-sociallogin">
                  <ul>
                    <li>
                      <a href="#" className="facebook-btn">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="whatsapp-btn">
                      <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter-btn">
                      <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkdin-btn">
                      <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-widget widget-quicklinks">
                <h6 className="widget-title">Our Products</h6>
                <ul>
                  <li>
                    <a href="about.html">Sliver Jewellery</a>
                  </li>
                  <li>
                    <a href="#">Brass Jewellery</a>
                  </li>
                  <li>
                    <a href="#">American Jewellery</a>
                  </li>
                  <li>
                    <a href="#">Silver Arm Bnad</a>
                  </li>
                  <li>
                    <a href="#">Silver Necklaces</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-widget widget-quicklinks">
                <h6 className="widget-title">Quick Links</h6>
                <ul>
                  <li>
                    <a href="my-account.html">Home</a>
                  </li>
                  <li>
                    <a href="cart.html">About Us</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Product</a>
                  </li>
                  <li>
                    <a href="#">Payment</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-widget widget-newsletter">
                <h6 className="widget-title">Contact Us</h6>
                {/* <p>
                  Get Business news, tip and solutions to your problems from our
                  experts.
                </p> */}
                <ul>
                  <li>
                    <b>Address :</b>Domjur ( Beside of Domjur Rail Ticket
                    Counter ), Howrah
                  </li>
                  <li>
                    <b>Phone :</b>
                    <a href="tel:+18009156270">9874713717 / 8250300848</a>
                  </li>
                  <li>
                    <b>Email :</b>
                    <a href="mailto:info@example.com">
                      mohanmandal136@gmail.com
                    </a>
                  </li>
                </ul>

                <div className="mailchimp-alerts">
                  <div className="mailchimp-submitting"></div>
                  <div className="mailchimp-success"></div>
                  <div className="mailchimp-error"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <div className="footer-bottomarea">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <p className="footer-copyright">
                © 2023. Designed by{" "}
                <a href="https://thememarch.com">Bussiness World Trade</a>
              </p>
            </div>
            <div className="col-md-5">
              <div className="footer-payment">
                <img src="./images/payment-methods.png" alt="payment methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
