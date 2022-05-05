import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.div`
  display: flex;
  background-color: #2d3436;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  color: #ecf0f1;
  cursor: pointer;
`;
const Desc = styled.p`
  margin: 20px 0px 60px 0px;
  font-size: 14px;
  color: #bdc3c7;
  cursor: auto;
`;
const SocialMediaContainer = styled.div`
  display: flex;
`;
const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #ecf0f1;
  display: flex;
  margin-right: 40px;
  cursor: pointer;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  color: #ecf0f1;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  color: #bdc3c7;
  width: 50%;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ZAPLN.</Logo>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a.
        </Desc>
        <SocialMediaContainer>
          <SocialMediaIcon>
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <TwitterIcon />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Whistlist</ListItem>
          <ListItem>Trending</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <List>
          <ListItem>zapln.co.id</ListItem>
          <ListItem>081213123123</ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;
