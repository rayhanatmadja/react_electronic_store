import React from "react";
import styled from "styled-components";
import imgRegister from "../images/register_img.jpg";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 50px 100px 50px 50px;
  justify-content: center;
`;
const Title = styled.h2`
  margin-bottom: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Input = styled.input`
  margin-top: 30px;
  width: 70%;
  padding: 15px;
`;
const Button = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;
const RightSide = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Link to="/">
            <KeyboardBackspaceRoundedIcon
              style={{ cursor: "pointer", marginBottom: "10px" }}
            />
          </Link>
          <Title>Welcome Back to ZAPLN!</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>Login</Button>
          </Form>
        </LeftSide>
        <RightSide>
          <Image src={imgRegister} />
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Login;
