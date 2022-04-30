import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
    </Fragment>
  );
};

export default Home;
