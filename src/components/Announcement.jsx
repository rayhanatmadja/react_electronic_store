import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #dfe6e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #636e72;
  font-size: 12px;
`;
const Link = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Announcement = () => {
  return (
    <Container>
      Electronic day! , get discount up to 70%,{" "}
      <Link>
        <a href="https://www.tokopedia.com/">click here</a>
      </Link>
    </Container>
  );
};

export default Announcement;
