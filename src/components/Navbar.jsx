import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #2d3436;
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Store = styled.div`
  width: 50%;
`;

const Logo = styled.h2`
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Menu = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Store>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              ZAPLN.
            </Link>
          </Logo>
        </Store>
        <Menu>
          <MenuItem>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/product_list"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Products
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart_shop">
                <ShoppingCartIcon style={{ color: "#fff" }} />
              </Link>
            </Badge>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
