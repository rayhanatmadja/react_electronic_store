import React from "react";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product_list" element={<ProductList />} />
        <Route path="single_product" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default App;
