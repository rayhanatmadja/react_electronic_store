import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 40%;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
`;

const SuccesPayment = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="https://ik.imagekit.io/iul14eyfs/credit-card__P0qlR6wc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652799624028" />
        <Desc>Congratulations!, your payment is succes</Desc>
        <Link to="/product_list">
          <Button>Back To Shop</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default SuccesPayment;
