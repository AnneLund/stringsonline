import styled from "styled-components";

export const Input_Styled = styled.input`
  background-color: ${(props) => props.theme.colors.background2};
  border: 1px solid #1f5e5b;
  border-radius: 5px;
  padding: 1em;
  width: 100%;
  color: ${(props) => props.theme.colors.onBackground2};

  ::placeholder {
    color: ${(props) => props.theme.colors.onBackground2};
  }
`;
