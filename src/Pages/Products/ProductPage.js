import styled from "styled-components";

export const ProductPage = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  padding: 1em 2em;
  margin-left: 15vw;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
  }
`;

export const Section = styled.article`
  display: grid;

  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0 auto;
  }
`;
