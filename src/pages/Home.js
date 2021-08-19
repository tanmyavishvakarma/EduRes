import React from "react";
import styled from "styled-components";
import Search from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
const Root = styled.div`
  background-color: #21294c;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.div`
  padding-top: 50px;
  font-size: 80px;
  font-family: "Oswald", sans-serif;
`;
const Desc = styled.div`
  padding: 50px 0;
  font-size: 50px;
  font-family: "Oswald", sans-serif;
`;
const ConBtn = styled.div`
  margin-bottom: 50px;
  width: 200px;
  height: 50px;
  border: 2px solid white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    color: #21294c;
    background-color: white;
  }
`;
const Contribute = styled.div`
  padding: 50px 0;
  font-size: 50px;
  font-family: "Oswald", sans-serif;
`;
const Home = () => {
  return (
    <Root>
      <Title>EDURES</Title>
      <Desc>Crowdsourced Portal For the Students</Desc>
      <Search></Search>
      <Contribute>Know some great resources help us out</Contribute>
      <ConBtn>
        <div>Contribute</div>
      </ConBtn>
      <Footer id="#footer"></Footer>
    </Root>
  );
};

export default Home;
