import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;
const Desc = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-weight: 300;
`;
const Button = styled.button`
  color: #fff;
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border: none;
  font-weight: 400;
  cursor: pointer;
`;

const CategoryItem = ({ img, title, desc }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Button>More</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
