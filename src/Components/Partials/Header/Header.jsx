import React from "react";
import { Link } from "react-router-dom";
import { MainNav } from "./MainNav.styled";
import { useState } from "react";
import styled from "styled-components";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";

const MainHeader = styled.header`
  position: relative;
  grid-gap: 1em;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
  }
`;
const Hamburger = styled.div`
  flex-direction: column;
  padding: 0 1em;
  cursor: pointer;
  span {
    height: 5px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Menu = styled.nav`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1.5em;
  position: absolute;
  right: 8vw;
  top: 2.3vw;

  @media (max-width: 768px) {
    flex-direction: column;
    transition: 300ms ease-in;
    width: 100%;
    padding-top: ${({ isOpen }) => (isOpen ? "5em" : "0")};
    backdrop-filter: blur(20px);
    align-items: center;
    z-index: 50000;
    position: relative;
    right: 0;

    top: 0;
    height: ${({ isOpen }) => (isOpen ? "90vh" : "0")};
  }
`;

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const [shrinkHeader] = useState(false);
  const { setLoggedIn, loggedIn } = useLoginStore();

  return (
    <MainHeader>
      <MainNav shrinkHeader={shrinkHeader}>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <Menu roll isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/">Forside</NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/terms">Salgs- og handelsbetingelser</NavLink>
          </li>

          {loggedIn ? (
            <li
              onClick={() => {
                setLoggedIn(false, "", "", "");
              }}>
              <button>Log ud</button>
            </li>
          ) : (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </Menu>
      </MainNav>
    </MainHeader>
  );
};

export default Header;
