import React from 'react'

const ShopNowBanner = () => {
  return (
    <>
    <div className="shopnow-banner-section">
                <div className="container">
                    <div className="row mt-30-reverse">

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                            <a href="#" className="banner scrollanim scrollanim-action">
                                <img src="./images/banner/banner-image-1.jpg" className='img-fluid' alt="banner image"/>
                            </a>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                            <a href="#" className="banner scrollanim scrollanim-action">
                                <img src="./images/banner/banner-image-2.jpg" className='img-fluid' alt="banner image"/>
                            </a>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                            <a href="#" className="banner scrollanim scrollanim-action">
                                <img src="./images/banner/banner-image-3.jpg" className='img-fluid' alt="banner image"/>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default ShopNowBanner