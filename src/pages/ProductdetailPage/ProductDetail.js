import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./productDetail.css";
import ReactImageMagnify from "react-image-magnify";

const ProductDetail = () => {
  const imgs = [
    {
      id: 1,
      url: "./images/product/product-image-5-thumb.jpg",
      alt: "Image-1",
    },
    {
      id: 2,
      url: "./images/product/product-image-6-thumb.jpg",
      alt: "Image-2",
    },
    {
      id: 3,
      url: "./images/product/product-image-1-thumb.jpg",
      alt: "Image-3",
    },
    {
      id: 4,
      url: "./images/product/product-image-2-thumb.jpg",
      alt: "Image-4",
    },
  ];

  const [mainImage, setMainImage] = useState(imgs[0]);

  const handleClick = (curElem) => {
    setMainImage(curElem);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Product Details" />

      <section className="product-detail-section">
        <div className="container">
          <div className="prodetails">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-10 col-12">
                <div key={mainImage.id}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: mainImage.url,
                      },
                      largeImage: {
                        src: mainImage.url, // And here too
                        width: 1500,
                        height: 2000,
                      },
                      enlargedImageContainerClassName: "zoom-lens",
                    }}
                  />
                </div>

                <div className="row mt-4">
                  {imgs.map((curElem, index) => (
                    <div className="col-md-3" key={index}>
                      <img
                        src={curElem.url}
                        alt={curElem.alt}
                        className="img-fluid"
                        onClick={() => handleClick(curElem)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-7 col-md-6 col-12">
                <div className="prodetails-content">
                  <h4 className="prodetails-title">Stylist daimond ring</h4>
                  <span className="prodetails-price">
                    <del>$75.99</del> $59.99
                  </span>
                  <div className="rating-box">
                    <span className="is-active">
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <span className="is-active">
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <span className="is-active">
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <span className="is-active">
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                  </div>
                  <div className="prodetails-infos">
                    <div className="prodetails-singleinfo">
                      <b>Product ID : </b>010
                    </div>
                    <div className="prodetails-singleinfo">
                      <b>Category : </b>
                      <a href="#">Ring</a>
                    </div>
                    <div className="prodetails-singleinfo prodetails-tags">
                      <b>Tags : </b>
                      <ul>
                        <li>
                          <a href="#">bracelets</a>
                        </li>
                        <li>
                          <a href="#">diamond</a>
                        </li>
                        <li>
                          <a href="#">ring</a>
                        </li>
                        <li>
                          <a href="#">necklaces</a>
                        </li>
                      </ul>
                    </div>
                    <div className="prodetails-singleinfo">
                      <b>Available : </b>
                      <span className="color-theme">In Stock</span>
                    </div>
                    <div className="prodetails-singleinfo prodetails-share">
                      <b>Share : </b>
                      <ul>
                        <li>
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
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis quemi dolor, malesuada id metus a, mattis eleifend
                    elit. Nullam pharetra consequat ex in dapibus. Vestibulum
                    ante ipsum primis in faucibus orciluctus curae.
                  </p>
                  <div className="prodetails-quantitycart d-flex">
                    <div>
                      <h6>Quantity :</h6>
                      <div className="quantitybox">
                        <input type="text" />
                        <div className="decrement-button quantitybox-button">
                          -
                        </div>
                        <div className="increment-button quantitybox-button">
                          +
                        </div>
                      </div>
                    </div>
                    <div className="size-box d-flex align-items-center">
                      <h6>Size :</h6>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="" className="button_slide slide_right mt-0 me-3">
                      Add To Cart
                    </a>
                    <a
                      href=""
                      className="button_slide slide_right buy_btn mt-0"
                    >
                      Buy Now
                    </a>
                  </div>
                  <div className="row">
                    <div className="delivery-options col-lg-6 mt-4">
                      <h6>Expected Shipping Date</h6>
                      <span>03 Sep 2023</span>
                    </div>
                    <div className="delivery-options col-lg-6 mt-4">
                      <h6>Delivery Option</h6>
                      <form>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Pincode"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            Check
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8  mt-5">
              <nav>
                <div className="nav nav-tabs mb-4" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Description
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Reviews (1)
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="prodetails-description">
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingOne"
                        >
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Metal Information
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div className="accordion-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <th className="w-50">Metal</th>
                                  <td>Yellow Gold</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Metal Purity</th>
                                  <td>22KT</td>
                                </tr>
                                <tr>
                                  <th className="w-50">
                                    Product Weight (Approx)
                                  </th>
                                  <td>3.85 g</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Metal Certification</th>
                                  <td>BIS Hallmark</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingTwo"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            Product Information
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <th className="w-50">Product Code</th>
                                  <td>OOZGR00109MM-MMY2018</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Product Name</th>
                                  <td>The Dahadaha Gold Ring</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Brand</th>
                                  <td>PC Jeweller</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Width (mm)</th>
                                  <td>5.43</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Length (mm)</th>
                                  <td>23.14</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            Service
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div className="accordion-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <th className="w-50">
                                    Expected Shipping Date
                                  </th>
                                  <td>03 Sep 2023</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Easy Returns (Days)</th>
                                  <td>10</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Lifetime Exchange</th>
                                  <td>Applicable</td>
                                </tr>
                                <tr>
                                  <th className="w-50">Lifetime Buyback</th>
                                  <td>Applicable</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="prodetails-review">
                    <h5>1 Review For Stylist daimond ring</h5>
                    <div className="comment-wrapper mb-4">
                      <div className="comment d-flex">
                        <div className="comment-thumb">
                          <img
                            src="./images/author-image-1.jpg"
                            alt="author image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="comment-content">
                          <h6 className="comment-authorname">
                            <a href="#">Frida Bins</a>
                          </h6>
                          <span className="comment-date">
                            Wednesday, October 17, 2018 at 4:00PM.
                          </span>
                          <div className="rating-box">
                            <span className="is-active">
                              <i className="fa-regular fa-star"></i>
                            </span>
                            <span className="is-active">
                              <i className="fa-regular fa-star"></i>
                            </span>
                            <span className="is-active">
                              <i className="fa-regular fa-star"></i>
                            </span>
                            <span className="is-active">
                              <i className="fa-regular fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-regular fa-star"></i>
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore
                            dolore magna aliqua. Ut enim ad minim veniam.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h5>Add a review</h5>
                    <form className="row g-3">
                      <div className="rating-box mb-3">
                        <span className="is-active">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="is-active">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="is-active">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="is-active">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Your Email*"
                        />
                      </div>
                      <div>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Your Review"
                        ></textarea>
                      </div>
                      <div className="text-start">
                        <a href="" className="button_slide slide_right mt-3">
                          Send Message
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="help-box">
                <h3>
                  We are here to help. <br />
                  Contact Us
                </h3>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-start mt-3">
                    <a href="" className="button_slide slide_right">
                      Submit
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="similliar-products pt-5">
            <h4>Similliar Products</h4>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
