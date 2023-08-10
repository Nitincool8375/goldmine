import React from "react";

const Banner = (props) => {
  return (
    <section className="banner-section">
      <div className="banner-img">
        <div className="container">
          <div className="banner-content">
            <h2>{props.name}</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
