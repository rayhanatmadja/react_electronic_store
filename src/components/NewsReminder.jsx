import React from "react";
import styled from "styled-components";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Container = styled.div`
  height: 60vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  color: #000;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
  color: #2c2c2c;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #dfe6e9;
  color: #2d3436;
  cursor: pointer;
`;

const NewsReminder = () => {
  return (
    <Container>
      <Title>Always Update</Title>
      <Desc>Update your favorite newest product by sending your email</Desc>
      <InputContainer>
        <Input type="text" placeholder="Your email" />
        <Button>
          <SendRoundedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsReminder;
