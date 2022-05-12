import React, { useState } from "react";
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
  const [sort, setSort] = useState({});

  const handleChangeFilter = e => {
    const value = e.target.value;
    setSort({
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterContainer>
        <Title>Products list</Title>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select name="sort" onChange={handleChangeFilter} value={sort}>
            <Option value="newest">Newest</Option>
            <Option value="popular">Popular</Option>
            <Option value="highest_price">Price (highest)</Option>
            <Option value="lowest_price">Price (lowest)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products sort={sort} />
      <NewsReminder />
      <Footer />
    </Container>
  );
};

export default ProductList;
