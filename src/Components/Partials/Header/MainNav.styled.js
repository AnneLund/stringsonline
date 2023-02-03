import styled from "styled-components";
import bg from "../../../Assets/Images/header-bg.png";

export const MainNav = styled.ul`
  display: flex;
  background-image: url(${bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 800;
  height: 11vh;
  flex-wrap: wrap;
  padding: ${(props) => (props.shrinkHeader ? "0.2rem" : "1rem")} 2rem;
  transition: padding 500ms ease;
  position: relative;

  .burger {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
      transition: max-height 0.3 ease-in;
      width: 100%;
      z-index: 50000;
      max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    }
  }

  li {
    list-style: none;
    &:last-of-type {
      margin-left: auto;
    }
  }

  button {
    padding: 0.5em 1.5em;
    background-color: ${(props) => props.theme.colors.button2};
    border: 1px #1f5e5b solid;
    border-radius: 5px;
    a {
      color: black;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: flex-end;
    background-image: none;

    li {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: flex-end;
  }
`;
