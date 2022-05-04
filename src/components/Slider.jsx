import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { slideData } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: #fbfbfd;
  overflow: hidden;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideDirection * -100}vw);
  transition: all 1.5s ease;
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
  transition: 0.5s ease;
  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

const Slider = () => {
  const [slideDirection, setSlideDirection] = useState(0);

  const handleClick = dir => {
    if (dir === "left") {
      setSlideDirection(slideDirection > 0 ? slideDirection - 1 : 2);
    } else {
      setSlideDirection(slideDirection < 2 ? slideDirection + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewRoundedIcon />
      </Arrow>
      <Wrapper slideDirection={slideDirection}>
        {slideData.map(item => (
          <Slide key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>More</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
