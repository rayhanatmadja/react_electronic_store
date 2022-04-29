import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Container = styled.div`
  background-color: red;
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

const Logo = styled.h1`
  font-weight: bold;
`;

const Menu = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 12px;
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
              <ShoppingCartRoundedIcon />
            </Badge>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
