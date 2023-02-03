import styled from "styled-components";

export const Styled_Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 20vw;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 1em;
  }

  button {
    width: 50%;
  }
`;
