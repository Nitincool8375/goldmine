import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./contact.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Contact" />
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.473157994693!2d88.21859847508945!3d22.636140730638875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f881b8d011e61f%3A0xad64255788e6e465!2sGold%20Mine%20Jewellers!5e0!3m2!1sen!2sin!4v1691646037917!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border: '0'}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="contact-section">
        <div className="section contact-area padding-section bg-white">
          <div className="container">
            <div className="contact-blocks">
              <div className="row mt-30-reverse justify-content-center">
                <div className="col-lg-4 col-md-6 mt-sm-3">
                  <div className="contact-block text-center">
                    <i className="fa-solid fa-phone"></i>
                    <h6>Call Us</h6>
                    <p>
                      Phone : <a href="tel:+18009156270">9874713717</a>
                    </p>
                    <p>
                      Tel : <a href="tel:+15147332010">8250300848</a>
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="contact-block text-center">
                    <i className="fa-solid fa-location-dot"></i>
                    <h6>Our Location</h6>
                    <p>
                      Domjur ( Beside of Domjur Rail Ticket Counter ), Howrah
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="contact-block text-center">
                    <i className="fa-solid fa-envelope"></i>
                    <h6>Email</h6>
                    <p>
                      <a href="mailto:surose@gmail.com">
                        mohanmandal136@gmail.com
                      </a>
                    </p>
                    <p style={{ visibility: "hidden" }}>
                      <a href="mailto:info@surose.com">info@surose.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-forms padding-section-top">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                  <div className="sectiontitle text-center">
                    <h3>SEND US A MESSAGE</h3>
                    <p>
                      You can contact us for any of your requirements. We’ll
                      help you meet your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your name here"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="surose@example.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your phone number here"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Subject</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Your subjert"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <a href="" className="button_slide slide_right">
                        Send Message
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              {/* <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form
                    id="contactform"
                    action="assets/php/mailer.php"
                    className="contact-forminner form"
                    method="POST"
                  >
                    <div className="form-inner">
                      <div className="form-field form-fieldhalf">
                        <label for="contact-form-name">Name</label>
                        <input
                          type="text"
                          id="contact-form-name"
                          placeholder="Your name here"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form-field form-fieldhalf">
                        <label for="contact-form-email">Email</label>
                        <input
                          type="email"
                          id="contact-form-email"
                          placeholder="surose@example.com"
                          name="email"
                          required=""
                        />
                      </div>
                      <div className="form-field form-fieldhalf">
                        <label for="contact-form-phone">Phone</label>
                        <input
                          type="text"
                          id="contact-form-phone"
                          placeholder="Your phone number here"
                          name="phone"
                          required=""
                        />
                      </div>
                      <div className="form-field form-fieldhalf">
                        <label for="contact-form-subject">Subject</label>
                        <input
                          type="text"
                          id="contact-form-subject"
                          placeholder="Your subjert"
                          name="subject"
                        />
                      </div>
                      <div className="form-field">
                        <label for="contact-form-message">Message</label>
                        <textarea
                          cols="30"
                          rows="5"
                          id="contact-form-message"
                          placeholder="Write your message"
                          name="message"
                        ></textarea>
                      </div>
                      <div className="form-field text-center">
                        <button type="submit" className="button button-block">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messages"></p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
