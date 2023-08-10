import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const BrandLogo = () => {
  return (
    <>
      <section className="brand-section">
        <div className="container">
        <Swiper
                                modules={[Autoplay, Scrollbar]}
                                direction={"horizontal"}
                                loop={true}
                                spaceBetween={20}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    // pauseOnMouseEnter: true,
                                }}
                                speed={3000}

                                breakpoints={{
                                    // when window width is >= 640px
                                    280: {
                                        spaceBetween: 20,
                                        slidesPerView: 1,

                                        autoplay: {
                                            delay: 1,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        },
                                        speed: 3000
                                    },
                                    375: {
                                        spaceBetween: 20,
                                        slidesPerView: 1,

                                        autoplay: {
                                            delay: 1,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        },
                                        speed: 3000
                                    },
                                    600: {
                                        spaceBetween: 20,
                                        slidesPerView: 2,

                                        autoplay: {
                                            delay: 1,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        },
                                        speed: 3000
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        spaceBetween: 20,
                                        slidesPerView: 2,

                                        autoplay: {
                                            delay: 1,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        },
                                        speed: 3000
                                    },
                                    991: {
                                        spaceBetween: 20,
                                        slidesPerView: 3,

                                        autoplay: {
                                            delay: 1,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        },
                                        speed: 3000
                                    },
                                    1200: {
                                        spaceBetween: 20,
                                        slidesPerView: 5,

                                        autoplay: {
                                            delay: 1,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        },
                                        speed: 3000
                                    },


                                }}
                            >
            <SwiperSlide>
              <a href="#" className="brand-logo-box">
                <img
                  src="./images/brand/brandlogo-1.png"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="brand-logo-box">
                <img
                  src="./images/brand/brandlogo-2.png"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="brand-logo-box">
                <img
                  src="./images/brand/brandlogo-3.png"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="brand-logo-box">
                <img
                  src="./images/brand/brandlogo-4.png"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="brand-logo-box">
                <img src="./images/brand/brandlogo-5.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="brand-logo-box">
                <img src="./images/brand/brandlogo-5.png" alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BrandLogo;
