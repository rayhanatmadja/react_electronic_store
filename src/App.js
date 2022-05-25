import React from "react";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CartShop from "./Pages/CartShop";
import SuccesPayment from "./Pages/SuccesPayment";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="product_list" element={<ProductList />} />
        <Route path="single_product" element={<SingleProduct />} />
        <Route path="cart_shop" element={<CartShop />} />
        <Route path="succes_payment" element={<SuccesPayment />} />
      </Routes>
    </>
  );
};

export default App;
