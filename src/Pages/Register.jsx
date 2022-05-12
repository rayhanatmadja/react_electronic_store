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
const Aggrement = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AggrementContent = styled.p`
  margin-left: 20px;
  font-size: 14px;
`;
const Checkbox = styled.input``;
const Reminder = styled.p`
  font-size: 14px;
  margin: 10px 0 0 35px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Link to="/home">
            <KeyboardBackspaceRoundedIcon
              style={{ cursor: "pointer", marginBottom: "10px" }}
            />
          </Link>
          <Title>Leading electronics place</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Aggrement>
              <Checkbox type="checkbox" />
              <AggrementContent>
                By registering, you must agree to the terms and conditions
              </AggrementContent>
            </Aggrement>
            <Reminder>
              Already have account ?, <Link to="/">sign in here</Link>
            </Reminder>
            <Button>Create Account</Button>
          </Form>
        </LeftSide>
        <RightSide>
          <Image src={imgRegister} />
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Register;
