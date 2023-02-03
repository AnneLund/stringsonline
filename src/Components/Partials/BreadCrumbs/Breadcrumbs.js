import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import home from "../../../Assets/Images/home-icon.png";

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.button2};
  text-decoration: none;
`;

const StyledBreadCrumbs = styled.ul`
  display: flex;
  padding: 1em;
  margin: auto;
  list-style-type: none;
  border-bottom: 1px grey solid;
  border-top: 1px grey solid;

  li {
    display: flex;
    gap: 0.2em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Breadcrumbs = () => {
  const crumbs = useReactRouterBreadcrumbs();
  const [symbol, setSymbol] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSymbol(true);
    } else {
      setSymbol(false);
    }
  }, [location]);

  return (
    <nav>
      <StyledBreadCrumbs>
        {crumbs.map(({ breadcrumb }, i) => {
          return (
            <li key={i}>
              {symbol ? (
                <picture>
                  <img src={home} alt="home" />
                </picture>
              ) : null}{" "}
              <NavLink to={breadcrumb.key}>{breadcrumb} \</NavLink>{" "}
            </li>
          );
        })}
      </StyledBreadCrumbs>
    </nav>
  );
};

export default Breadcrumbs;
