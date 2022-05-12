import React from "react";
import styled from "styled-components";
import { products_data } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Products = ({ sort }) => {
  return (
    <Container>
      {products_data.map(item => {
        return <ProductItem key={item.id} img={item.img} />;
      })}
    </Container>
  );
};

export default Products;
