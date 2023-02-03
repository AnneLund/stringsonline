import { createGlobalStyle, css } from "styled-components";

export const Globals = createGlobalStyle`${css`
  * {
    list-style-type: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100%;
  }

  html {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.onBackground};
  }

  #root {
    min-height: 100%;
    overflow: hidden;
    display: grid;

    grid-template-columns: 1fr;
  }

  .container {
    width: 70vw;

    header {
      padding: 1em 0;
      h1 {
        font-size: 2em;
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`}`;
