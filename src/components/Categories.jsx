import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories_data } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories_data.map(item => (
        <CategoryItem
          key={item.id}
          img={item.img}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </Container>
  );
};

export default Categories;
