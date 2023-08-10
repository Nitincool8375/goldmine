import React from 'react'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';


const WishList = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Banner name="WishList" />
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
                  <td>
                    <a href="#" className='button_slide slide_right text-white'>
                        Add to Cart
                    </a>
                  </td>
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
                  <td>
                    <a href="#" className='button_slide slide_right text-white'>
                        Add to Cart
                    </a>
                  </td>
                  <td className="del-btn">
                    <a className="btn">
                      <i className="fa-solid fa-xmark"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default WishList