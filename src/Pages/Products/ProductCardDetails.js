import styled from "styled-components";

export const ProductCardDetails = styled.figure`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  padding: 1em;
  border: 1px grey solid;

  picture {
    width: 15vw;
  }
  img {
    width: 100%;
    margin: 0;
    transform: rotate(-90deg);
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-right: 2em;
    h2 {
      font-size: 1.7em;
      margin-bottom: 1em;
      width: 100%;
    }

    p {
      font-size: 0.8em;
      margin-bottom: 0.5em;
    }

    button {
      width: fit-content;
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    p {
      padding: 1em;
      border: 1px grey solid;
    }

    span {
      display: block;
      margin-left: auto;
    }

    button {
      width: 30%;
      margin-left: auto;
      padding: 1em;
    }

    @media screen and (max-width: 1000px) {
      span,
      button {
        width: 50%;
        margin: 0 auto;
      }
      p {
        padding: 1em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    figcaption {
      width: 100%;
      margin: 1em 0;
    }
    picture {
      width: 100%;
    }
  }
`;
