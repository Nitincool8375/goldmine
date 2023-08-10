import React from 'react'

const Service = () => {
  return (
    <>
    <section className='service-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 mt-4'>
                    <div className='service-box'>
                        <span className='service-icon'>
                            <img src="./images/icons/icon-free-shipping.png" alt="" />
                        </span>
                        <div className='service-content'>
                            <h6>Free Shipping</h6>
                            <p>We provide free shipping for all order over $200.00</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mt-4'>
                    <div className='service-box'>
                        <span className='service-icon'>
                            <img src="./images/icons/icon-fast-delivery.png" alt="" />
                        </span>
                        <div className='service-content'>
                            <h6>Fast Delivery</h6>
                            <p>We always deliver our customers very quickly.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mt-4'>
                    <div className='service-box'>
                        <span className='service-icon'>
                            <img src="./images/icons/icon-247-support.png" alt="" />
                        </span>
                        <div className='service-content'>
                            <h6>24/7 Support</h6>
                            <p>We provide support to our customers within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service