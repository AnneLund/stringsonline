import { Link } from "react-router-dom";
import styled from "styled-components";

export const Link_Styled = styled(Link)`
  padding: 0 0.2em;
  color: ${(props) => props.theme.colors.button2};
  border-radius: 5px;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    color: white;
    transition: 500ms ease-in-out;
  }
`;
