import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1 ,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="hero-slider-img align-items-center">

          <div className="row">
            <div className="col-12">
              {/* <h3>Woman’s Jewellery Collection</h3>
              <p>
                Jewellery may be made from a wide range of materials. Jewellery
                has been made to adorn nearly every body part from hairpins to
                toe.
              </p>
              <a href="#" className="button_slide slide_right">Shop Now</a> */}
              <img src="./images/banner-img/banner-1.jpg" alt="" className="img-fluid"/>
            </div>
          </div>
      </div>
      <div className="hero-slider-img-2 align-items-center">
          <div className="row">
            <div className="col-12">
              {/* <h3>Woman’s Jewellery Collection</h3>
              <p>
                Jewellery may be made from a wide range of materials. Jewellery
                has been made to adorn nearly every body part from hairpins to
                toe.
              </p>
              <a href="#" className="button_slide slide_right">Shop Now</a> */}
              <img src="./images/banner-img/banner-2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="hero-slider-img-2 align-items-center">
          <div className="row">
            <div className="col-12">
              {/* <h3>Woman’s Jewellery Collection</h3>
              <p>
                Jewellery may be made from a wide range of materials. Jewellery
                has been made to adorn nearly every body part from hairpins to
                toe.
              </p>
              <a href="#" className="button_slide slide_right">Shop Now</a> */}
              <img src="./images/banner-img/banner-3.jpg" alt="" />
            </div>
          </div>
        </div>
    </Slider>
  );
};

export default HeroSlider;
