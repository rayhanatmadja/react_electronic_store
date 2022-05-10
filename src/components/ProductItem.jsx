import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Routes, Route, Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  background-color: #eee;
  position: relative;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Rounded = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #222;
    color: #fff;
    transform: scale(1.1);
  }
`;

const ProductItem = ({ img }) => {
  return (
    <Container>
      {/* <Rounded /> */}
      <Image src={img} />
      <Info>
        <Icon>
          <Link to="/single_product">
            <SearchIcon
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            />
          </Link>
        </Icon>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
