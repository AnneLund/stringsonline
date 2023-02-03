import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button_Styled } from "../../Styles/Button_Styled";
import { Input_Styled } from "../../Styles/Input_Styled";
import mail from "../../Assets/Images/mail-icon.png";
import phone from "../../Assets/Images/phone-icon.png";
import cart from "../../Assets/Images/cart-icon.png";
import { Link } from "react-router-dom";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import TinyCart from "../../Pages/ShoppingCart/TinyCart";

const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 0.8em;

  @media screen and (max-width: 1020px) {
    padding-left: 1em;
    position: relative;
    justify-content: center;
    top: 1em;
  }
`;

const HeaderSearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;

  div {
    display: flex;
    width: 100%;
    gap: 1em;
    position: relative;
  }

  ul {
    position: absolute;
    top: 3em;
    padding: 1em;
    background-color: #81c27b;
    li {
      margin: 0.5em auto;
      color: black;
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const SearchBar = () => {
  const { loggedIn } = useLoginStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.mediehuset.net/stringsonline/search/${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <HeaderSearchBar>
        <Contact>
          <picture>
            <img src={mail} alt="email" />
          </picture>
          <p>SALES@STRINGSONLINE.COM</p>
          <picture>
            <img src={phone} alt="phone" />
          </picture>
          <p>+45 98 12 22 68</p>
          <picture>
            <Link to="/cart">
              <img src={cart} alt="cart" />
            </Link>

            {loggedIn ? <TinyCart /> : null}
          </picture>
        </Contact>
        <div>
          <Input_Styled placeholder="Søg.." type="text" value={searchTerm} onChange={handleChange} />
          <Button_Styled onClick={handleSearch}>Søg</Button_Styled>

          {searchResults?.items ? (
            <ul>
              {searchResults?.items.map((result, index) => (
                <li key={index}>{result.name}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </HeaderSearchBar>
    </>
  );
};

export default SearchBar;
