import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer"
import "./product.css";

const Product = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Products"/>

      <section className="product-section">
        <div className="container">
          <form action="#" className="shop-header">
            <div className="shop-productview">
              <span>View:</span>
              <button data-view="grid" className="active">
                <i className="fa-solid fa-grip"></i>
              </button>
              <button data-view="list" className="">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <p className="shop-countview">Showing 1 to 9 of 16 </p>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Default Sorting</option>
              <option>Daimond Jewellery</option>
              <option>Gold Jewellery</option>
              <option>Brass Jewellery</option>
              <option>Silver Jewellery</option>
            </select>
          </form>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
              </div>
          
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>

              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
        </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
              <div className="card product-card-section">
                <a href="/ProductDetail">
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
                </a>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination mt-5">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item is-active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />  
    </>
  );
};

export default Product;
