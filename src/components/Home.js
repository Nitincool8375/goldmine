import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HeroSlider from "./slider/HeroSlider";
import Service from "./Service";
import PopularProduct from "./PopularProduct";
import ArrivalProduct from "./ArrivalProduct";
import ShopNowBanner from "./ShopNowBanner";
import BrandLogo from "./BrandLogo";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSlider />
      <Service />
      <PopularProduct />
      <ShopNowBanner /> 
      <ArrivalProduct />
      <BrandLogo />
      <Footer /> 
    </>
  );
};

export default Home;
