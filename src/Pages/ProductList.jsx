import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsReminder from "../components/NewsReminder";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select``;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterContainer>
        <Title>Products list</Title>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Popular</Option>
            <Option>Price (highest)</Option>
            <Option>Price (lowest)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsReminder />
      <Footer />
    </Container>
  );
};

export default ProductList;
