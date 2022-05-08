import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsReminder from "../components/NewsReminder";
import Footer from "../components/Footer";
import iphoneSe from "../images/iphone-se.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 60px;
`;
const Desc = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  color: #636e72;
`;
const Price = styled.p`
  margin-bottom: 30px;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterStorage = styled.button`
  border: 1px solid black;
  display: flex;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  margin-left: 30px;
  transition: 0.5s ease;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={iphoneSe} />
        </ImgContainer>
        <InfoContainer>
          <Title>Iphone SE</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Desc>
          <Price>Rp. 7.899.000</Price>
          <FilterContainer>
            <Filter>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterStorage>64GB</FilterStorage>
              <FilterStorage>128GB</FilterStorage>
              <FilterStorage>512GB</FilterStorage>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveRoundedIcon style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <AddRoundedIcon style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsReminder />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
