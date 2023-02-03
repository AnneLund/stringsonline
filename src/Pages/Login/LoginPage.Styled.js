import styled from "styled-components";

export const LoginPage = styled.section`
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
