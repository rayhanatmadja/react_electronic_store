import React from "react";
import styled from "styled-components";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import iphoneImg from "../images/iphone_13.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: #fbfbfd;
`;

const Arrow = styled.div`
  width: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
  height: 50%;
  margin: 100px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px 100px 50px 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  margin: 35px 0;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2px;
  color: #636e72;
`;
const Button = styled.button`
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewRoundedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Img src={iphoneImg} />
          </ImgContainer>
          <InfoContainer>
            <Title>Iphone.13.Pro</Title>
            <Desc>
              With a redesigned lens and a powerful autofocus system, the new
              Ultra Wide camera is able to adjust focus at a distance of 2
              centimeters — so even the smallest details look epic.
            </Desc>
            <Button>More</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
