import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularProduct = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="product-section-heading">
                <h3>POPULAR PRODUCTS</h3>
                <p>
                  Our popular products are so beautyful to see that the shoppers
                  are easily attracted to them.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Carousel responsive={responsive}>
              <div className="col-md-3 mt-50" style={{ width: "92%" }}>
                <div className="card product-card-section">
                  <div className="product-img">
                    <img
                      src="./images/product/product-image-4.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <ul className="product-actions">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i> Add to
                        cart
                      </a>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="product-badges">
                    <span className="product-badges-new">New</span>
                    <span className="product-badges-sale">Sale</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Stylist daimond earring</h5>
                    <div className="price-box">
                      <h6>$29.99</h6>
                      <div className="rating-box">
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-50" style={{ width: "92%" }}>
                <div className="card product-card-section">
                  <div className="product-img">
                    <img
                      src="./images/product/product-image-4.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <ul className="product-actions">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i> Add to
                        cart
                      </a>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="product-badges">
                    <span className="product-badges-new">New</span>
                    <span className="product-badges-sale">Sale</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Stylist daimond earring</h5>
                    <div className="price-box">
                      <h6>$29.99</h6>
                      <div className="rating-box">
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-50" style={{ width: "92%" }}>
                <div className="card product-card-section">
                  <div className="product-img">
                    <img
                      src="./images/product/product-image-6.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <ul className="product-actions">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i> Add to
                        cart
                      </a>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="product-badges">
                    <span className="product-badges-new">New</span>
                    <span className="product-badges-sale">Sale</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Stylist daimond earring</h5>
                    <div className="price-box">
                      <h6>$29.99</h6>
                      <div className="rating-box">
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-50" style={{ width: "92%" }}>
                <div className="card product-card-section">
                  <div className="product-img">
                    <img
                      src="./images/product/product-image-8.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <ul className="product-actions">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i> Add to
                        cart
                      </a>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="product-badges">
                    <span className="product-badges-new">New</span>
                    <span className="product-badges-sale">Sale</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Stylist daimond earring</h5>
                    <div className="price-box">
                      <h6>$29.99</h6>
                      <div className="rating-box">
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-50" style={{ width: "92%" }}>
                <div className="card product-card-section">
                  <div className="product-img">
                    <img
                      src="./images/product/product-image-9.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <ul className="product-actions">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i> Add to
                        cart
                      </a>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="product-badges">
                    <span className="product-badges-new">New</span>
                    <span className="product-badges-sale">Sale</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Stylist daimond earring</h5>
                    <div className="price-box">
                      <h6>$29.99</h6>
                      <div className="rating-box">
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* <section className="product-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="product-section-heading">
                <h3>POPULAR PRODUCTS</h3>
                <p>
                  Our popular products are so beautyful to see that the shoppers
                  are easily attracted to them.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <div className="product-img">
                  <img
                    src="./images/product/product-image-4.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-cart-shopping"></i> Add to cart
                    </a>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                </ul>
                <div className="product-badges">
                  <span className="product-badges-new">New</span>
                  <span className="product-badges-sale">Sale</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Stylist daimond earring</h5>
                  <div className="price-box">
                    <h6>$29.99</h6>
                    <div className="rating-box">
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <div className="product-img">
                  <img
                    src="./images/product/product-image-6.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-cart-shopping"></i> Add to cart
                    </a>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                </ul>
                <div className="product-badges">
                  <span className="product-badges-new">New</span>
                  <span className="product-badges-sale">Sale</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Stylist daimond earring</h5>
                  <div className="price-box">
                    <h6>$29.99</h6>
                    <div className="rating-box">
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <div className="product-img">
                  <img
                    src="./images/product/product-image-8.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-cart-shopping"></i> Add to cart
                    </a>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                </ul>
                <div className="product-badges">
                  <span className="product-badges-new">New</span>
                  <span className="product-badges-sale">Sale</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Stylist daimond earring</h5>
                  <div className="price-box">
                    <h6>$29.99</h6>
                    <div className="rating-box">
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <div className="product-img">
                  <img
                    src="./images/product/product-image-9.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <ul className="product-actions">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-cart-shopping"></i> Add to cart
                    </a>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                </ul>
                <div className="product-badges">
                  <span className="product-badges-new">New</span>
                  <span className="product-badges-sale">Sale</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Stylist daimond earring</h5>
                  <div className="price-box">
                    <h6>$29.99</h6>
                    <div className="rating-box">
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  */}
    </>
  );
};

export default PopularProduct;
