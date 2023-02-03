import React from "react";
import hero from "../Assets/Images/hero.jpg";
import styled from "styled-components";
import { Button_Radius_Styled, Button_Styled } from "../Styles/Button_Styled";
import { Page } from "../Components/Layout/Page";

const HeroBanner = styled.figure`
  display: flex;
  align-items: center;
  margin: 5.2vw 16vw 0;
  width: 80vw;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.figureBackground};

  picture {
    width: 50vw;
  }
  img {
    width: 100%;
    aspect-ratio: 2/1;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2em;
    margin-left: 1em;
    h2 {
      font-size: 1.3em;
    }

    p {
      font-size: 2em;
      border-top: grey 1px solid;
      border-bottom: grey 1px solid;
      margin: 0.5em 0;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 1em;
    margin: 1em auto;
    width: 100%;
    picture {
      width: 100%;
      margin-bottom: 1em;
    }
  }
`;

const News = () => {
  return (
    <HeroBanner>
      <picture>
        <img src={hero} alt="guitar" />
      </picture>

      <figcaption>
        <header>
          <h2>Martin GCP-11E</h2>
          <h4>SERIES ELECTRO ACOUSTIC</h4>
        </header>

        <p>SE DEN NYE GENERATION HALVAKUSTISKE</p>

        <Button_Radius_Styled>LÆS MERE</Button_Radius_Styled>
      </figcaption>
    </HeroBanner>
  );
};

export default News;
