import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from '../components/Products';
import Footer from "../components/Footer";
import Shops from "../components/AllShopsCards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Shops />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
