import styled from "styled-components";

export const Navbar = styled.section`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const DropUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const List_Styled = styled.nav`
  position: absolute;
  top: 35vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  grid-area: Nav;

  ul {
    margin: 1.5em 0;
  }
  li {
    padding: 0.5em;
  }

  p {
    color: ${(props) => props.theme.colors.button2};
    cursor: pointer;
    &:hover {
      color: white;
      transition: 500ms ease-in-out;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
