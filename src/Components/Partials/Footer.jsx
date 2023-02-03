import React from "react";
import styled from "styled-components";
import bg from "../../Assets/Images/footer.png";

const Footer_Styled = styled.footer`
  background-image: url(${bg});
  background-color: #434343a8;
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center;
  height: 10vh;
`;

const Footer = () => {
  return <Footer_Styled></Footer_Styled>;
};

export default Footer;
