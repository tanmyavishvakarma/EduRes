import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: black;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const Footer = () => {
  return <Root id="#footer">Developed with love by BonelessPizza</Root>;
};

export default Footer;
