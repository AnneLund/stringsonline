import styled from "styled-components";

export const ProductCard = styled.figure`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  border: 1px grey solid;
  picture {
    padding: 0.5em;
    display: flex;
    justify-content: center;
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
    justify-content: space-around;
    gap: 1em;
    padding: 1em;

    h2 {
      font-size: 1.7em;
      margin-bottom: 1em;
    }

    p {
      font-size: 0.8em;
      margin-bottom: 0.5em;
      border-top-left-radius: 5px;
    }

    .info {
      width: 100%;
      display: flex;
      margin-left: auto;
      p {
        padding: 1.7em;
        border: 1px grey solid;
      }

      span {
        display: block;
        margin-left: auto;
      }

      button {
        width: 30%;
        height: 8vh;
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
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }

    button {
      width: 50%;
    }
  }
`;
