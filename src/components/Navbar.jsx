import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
          <Logo>ZAPLN.</Logo>
        </Store>
        <Menu>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
