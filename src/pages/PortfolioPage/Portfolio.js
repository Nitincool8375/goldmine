import React, { useState } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./portfolio.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Portfolios" />
      <section className="portfolio-section">
        <div className="container">
          <ul
            class="nav nav-pills mb-5 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-All-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-All"
                type="button"
                role="tab"
                aria-controls="pills-All"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-Jewellery-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Jewellery"
                type="button"
                role="tab"
                aria-controls="pills-Jewellery"
                aria-selected="false"
              >
                Jewellery
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-Nacklace-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Nacklace"
                type="button"
                role="tab"
                aria-controls="pills-Nacklace"
                aria-selected="false"
              >
                Nacklace
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-Bracelet-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Bracelet"
                type="button"
                role="tab"
                aria-controls="pills-Bracelet"
                aria-selected="false"
              >
                Bracelet
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-Earrings-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Earrings"
                type="button"
                role="tab"
                aria-controls="pills-Earrings"
                aria-selected="false"
              >
                Earrings
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-All"
              role="tabpanel"
              aria-labelledby="pills-All-tab"
            >
              <div class="row g-4">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-1.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    {isOpen && (
        <Lightbox
          mainSrc="./images/portfolio/portfolio-image-1.jpg"
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {}}
          onMoveNextRequest={() => {}}
        />
      )}
                   
                    <div class="overlay" onClick={() => setIsOpen(true)}>
                      <span className="common-heading">
                        <i class="fa-solid fa-maximize"></i>
                        </span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-2-lg.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12 ">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-3.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-4.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-5.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    {isOpen && (
        <Lightbox
          mainSrc="./images/portfolio/portfolio-image-6.jpg"
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {}}
          onMoveNextRequest={() => {}}
        />
      )}
                    <div class="overlay"onClick={() => setIsOpen(true)}>
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio" >
                    <img
                      src="./images/portfolio/portfolio-image-6.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-8.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-7.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-9.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-Jewellery"
              role="tabpanel"
              aria-labelledby="pills-Jewellery-tab"
            >
              <div class="row g-4">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-1.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 ">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-3.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-4.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-5.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-7.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-Nacklace"
              role="tabpanel"
              aria-labelledby="pills-Nacklace-tab"
            >
              <div class="row g-4">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-2-lg.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-6.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-9.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-Bracelet"
              role="tabpanel"
              aria-labelledby="pills-Bracelet-tab"
            >
              <div class="row g-4">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-2-lg.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-4.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-8.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-Earrings"
              role="tabpanel"
              aria-labelledby="pills-Earrings-tab"
            >
              <div class="row g-4">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-8.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-7.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="portfolio">
                    <img
                      src="./images/portfolio/portfolio-image-9.jpg"
                      alt="portfolio image"
                      className="w-100"
                      style={{ height: "350px" }}
                    />
                    <div class="overlay">
                      <a
                        href="https://www.thapatechnical.com/"
                        target="_blank"
                        class="common-heading"
                      >
                        <i class="fa-solid fa-maximize"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="button_slide slide_right mt-5">Load More</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
