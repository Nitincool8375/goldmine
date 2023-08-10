import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutPage/AboutUs";
import Contact from "./pages/contactPage/ContactUs";
import Product from "./pages/productPage/Product";
import ProductDetail from "./pages/ProductdetailPage/ProductDetail";
import ShoppingCart from "./pages/shoppinCartPage/ShoppingCart"
import Login from "./pages/loginPage/Login";
import WishList from "./pages/wishlistPage/WishList";
import Portfolio from "./pages/PortfolioPage/Portfolio";
// import Error from "./pages/Error";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
  );
}

export default App;
