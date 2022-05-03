import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </Fragment>
  );
};

export default Home;
