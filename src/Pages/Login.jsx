import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import imgRegister from "../images/register_img.jpg";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Link } from "react-router-dom";
import AuthCtx from "../context/AuthCtx";
import axios from "../api/axios";

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
  margin-top: 30px;
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
const Reminder = styled.p`
  font-size: 14px;
  margin-top: 30px;
`;

const Login = ref => {
  const { setAuth } = useContext(AuthCtx);

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleChangeUname = e => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleChangePw = e => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <Container>
      {success ? (
        <Wrapper>
          <LeftSide>
            <Title style={{ fontSize: "72px" }}>You're LoggedIn !</Title>
            <Link to="/home" style={{ color: "#000" }}>
              Go to Home Page
            </Link>
          </LeftSide>
          <RightSide>
            <Image src={imgRegister} />
          </RightSide>
        </Wrapper>
      ) : (
        <Wrapper>
          <LeftSide>
            <Link to="/home">
              <KeyboardBackspaceRoundedIcon
                style={{ cursor: "pointer", marginBottom: "10px" }}
              />
            </Link>
            <Title>Welcome Back to ZAPLN!</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Username"
                type="text"
                ref={userRef}
                value={username}
                autoComplete="off"
                onChange={handleChangeUname}
                required
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={handleChangePw}
                required
              />
              <Reminder>
                Don't have an account yet ?,{" "}
                <Link to="/register" style={{ color: "#000" }}>
                  sign up
                </Link>
              </Reminder>
              <Button>Login</Button>
            </Form>
          </LeftSide>
          <RightSide>
            <Image src={imgRegister} />
          </RightSide>
        </Wrapper>
      )}
    </Container>
  );
};

export default Login;
