import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsReminder from "../components/NewsReminder";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsReminder />
      <Footer />
    </Fragment>
  );
};

export default Home;
