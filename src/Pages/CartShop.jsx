import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsReminder from "../components/NewsReminder";
import Footer from "../components/Footer";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import macStudio from "../images/mac-studio.png";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopBtn = styled.button`
  background-color: ${props =>
    props.backgroundColor === "transparent" ? "transparent" : "black"};
  color: ${props => (props.txtColor === "black" ? "black" : "white")};
  cursor: pointer;
  padding: 10px 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomContent = styled.div`
  flex: 3;
  margin: 50px 20px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  background-color: #eee;
`;
const Details = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const HrLine = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 30px 0;
`;
const ProductName = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;
const ProductColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 15px 5px;
  cursor: pointer;
  background-color: ${props => props.color};
`;
const ProductSize = styled.span`
  font-size: 20px;
`;
const ProductPrize = styled.span`
  font-size: 28px;
  font-weight: 500;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const PricetAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 700;
`;
const PriceAmount = styled.input`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
  text-align: center;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 0.5px solid #000;
  padding: 20px;
  height: 32vh;
  margin: 20px;
`;
const SummaryTitle = styled.h3`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryBtn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  background-color: #000;
`;

const CartShop = () => {
  const [num, setNum] = useState(0);

  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };

  let decNum = () => {
    if (num > 0) {
      setNum(Number(num) - 1);
    }
  };

  const handleChangeNum = e => {
    setNum(e.target.value);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopBtn backgroundColor="transparent" txtColor="black">
            Back Shopping
          </TopBtn>
          <TopBtn backgroundColor="black" txtColor="white">
            Checkout Now
          </TopBtn>
        </Top>
        <Bottom>
          <BottomContent>
            <Product>
              <ProductDetails>
                <Image src={macStudio} />
                <Details>
                  <ProductName>
                    <b>Product :</b> Mac Studio
                  </ProductName>
                  <ProductSize>
                    <b>Size :</b>64 GB
                  </ProductSize>
                  <ProductColor color="grey" />
                </Details>
              </ProductDetails>
              <PriceDetails>
                <PricetAmountContainer>
                  <RemoveRoundedIcon
                    style={{ cursor: "pointer" }}
                    onClick={decNum}
                  />
                  <PriceAmount
                    type="text"
                    value={num}
                    onChange={handleChangeNum}
                  />
                  <AddRoundedIcon
                    style={{ cursor: "pointer" }}
                    onClick={incNum}
                  />
                </PricetAmountContainer>
                <ProductPrize>Rp 10.000.000</ProductPrize>
              </PriceDetails>
            </Product>
            <HrLine />
            <Product>
              <ProductDetails>
                <Image src={macStudio} />
                <Details>
                  <ProductName>
                    <b>Product :</b> Mac Studio
                  </ProductName>
                  <ProductSize>
                    <b>Size :</b>64 GB
                  </ProductSize>
                  <ProductColor color="grey" />
                </Details>
              </ProductDetails>
              <PriceDetails>
                <PricetAmountContainer>
                  <RemoveRoundedIcon
                    style={{ cursor: "pointer" }}
                    onClick={decNum}
                  />
                  <PriceAmount
                    type="text"
                    value={num}
                    onChange={handleChangeNum}
                  />
                  <AddRoundedIcon
                    style={{ cursor: "pointer" }}
                    onClick={incNum}
                  />
                </PricetAmountContainer>
                <ProductPrize>Rp 10.000.000</ProductPrize>
              </PriceDetails>
            </Product>
          </BottomContent>
          <Summary>
            <SummaryTitle>Item Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rp 10.000.000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rp 10.000.000</SummaryItemPrice>
            </SummaryItem>
            <SummaryBtn>Checkout Now</SummaryBtn>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsReminder />
      <Footer />
    </Container>
  );
};

export default CartShop;
