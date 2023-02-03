import styled from "styled-components";

const All = `
font-size: 1.2em;
width: 100%;
`;

export const StyledPrimary = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  display: grid;
  grid-gap: 1em;
  padding: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas:
    "A"
    "B"
    "C"
    "D"
    "E"
    "F";

  @media all and (min-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    grid-template-columns: 0.5fr 1fr auto;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "A A A"
      "B B B"
      "C C C"
      "D D E"
      "F F F";
  }

  @media all and (min-width: ${(props) => props.theme.breakPoints.desktop.value}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "A A B"
      "C C C"
      "D D D"
      "E E E"
      "F F F";
  }

  > :nth-child(1) {
    grid-area: A;
    ${All}
  }

  > :nth-child(2) {
    grid-area: B;
    ${All}
  }

  > :nth-child(3) {
    grid-area: C;
    ${All}

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  > :nth-child(4) {
    grid-area: D;
    ${All}
  }

  > :nth-child(5) {
    grid-area: E;

    ${All}
  }

  > :nth-child(6) {
    grid-area: F;
    ${All}
  }
`;
