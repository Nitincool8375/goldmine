import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./login.css";

const Login = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Login & Registration" />
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 login-box">
              <h4>Login</h4>
              <p>Become a part of our community!</p>
              <form className="row">
                <div className="mb-4">
                  <label className="form-label">Username or email address*</label>
                  <input type="email" className="form-control form-control-lg" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password*</label>
                  <input type="password" className="form-control form-control-lg" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Check me out</label>
                  </div>
                </div>
                <p className="form-field">
                  <a href="#">Forgot your password?</a>
                </p>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button_slide slide_right border-0"
                  >
                    Login
                  </button>
                </div>

                <div className="form-sociallogin">
                  <h6>Or, Login with :</h6>
                  <ul>
                    <li>
                      <a href="#" className="facebook-btn">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google-btn">
                        <i className="fa-brands fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="col-md-6 login-box">
            <h4>Create an account</h4>
              <p>Welcome! Register for an account</p>
            <form className="row">
                <div className="mb-4">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control form-control-lg" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control form-control-lg" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Show Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">I have read and agree to the website <a href="#"> terms and conditions </a></label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button_slide slide_right border-0"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
