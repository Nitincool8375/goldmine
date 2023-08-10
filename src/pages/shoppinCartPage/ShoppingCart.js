import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./shoppingCart.css";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Shopping Cart" />
      <section className="shopping-cart-section">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="text-center">
                  <th scope="col">IMAGE</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle text-center shopping-cart-content">
                  <td>
                    <a href="#">
                      <img
                        src="./images/product/product-image-1-thumb.jpg"
                        alt=""
                      />
                    </a>
                  </td>
                  <td className="fw-bold">
                    <a href="#">Stylist daimond earring</a>
                  </td>
                  <td>$75.00</td>
                  <td>
                    <div className="quantitybox">
                      <input type="text" />
                      <div className="decrement-button quantitybox-button">
                        -
                      </div>
                      <div className="increment-button quantitybox-button">
                        +
                      </div>
                    </div>
                  </td>
                  <td>$75.00</td>
                  <td className="del-btn">
                    <a className="btn">
                      <i className="fa-solid fa-xmark"></i>
                    </a>
                  </td>
                </tr>
                <tr className="align-middle text-center shopping-cart-content">
                  <td>
                    <a href="">
                      <img
                        src="./images/product/product-image-2-thumb.jpg"
                        alt=""
                      />
                    </a>
                  </td>
                  <td className="fw-bold">
                    <a href="#">Stylist daimond earring</a>
                  </td>
                  <td>$75.00</td>
                  <td>
                    <div className="quantitybox">
                      <input type="text" />
                      <div className="decrement-button quantitybox-button">
                        -
                      </div>
                      <div className="increment-button quantitybox-button">
                        +
                      </div>
                    </div>
                  </td>
                  <td>$75.00</td>
                  <td className="del-btn">
                    <a className="btn">
                      <i className="fa-solid fa-xmark"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 mt-4">
              <div className="buttongroup">
                <a href="#" className="button_slide slide_right">
                  Continue Shopping
                </a>
                <a href="#" className="button_slide slide_right">
                  Update Cart
                </a>
              </div>
              <form className="cart-coupon">
                <label className="form-label">Have a coupon code?</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter coupon code"
                  required="required"
                />
                <button className="button_slide slide_right border-0 mt-0 mt-md-3 mt-lg-0">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="cart-pricebox">
                <h2>Cart Totals</h2>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr className="cart-pricebox-subtotal">
                        <td>Cart Subtotal</td>
                        <td>$175.00</td>
                      </tr>
                      <tr className="cart-pricebox-shipping">
                        <td>(+) Shipping Charge</td>
                        <td>$15.00</td>
                      </tr>
                      <tr className="cart-pricebox-total">
                        <td>Total</td>
                        <td>$190.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="#" className="button_slide slide_right">
                  Proceed To Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShoppingCart;
