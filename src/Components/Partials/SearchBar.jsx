import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button_Styled } from "../../Styles/Button_Styled";
import { Input_Styled } from "../../Styles/Input_Styled";
import { FaArrowRight } from "react-icons/fa";
import mail from "../../Assets/Images/mail-icon.png";
import phone from "../../Assets/Images/phone-icon.png";
import cart from "../../Assets/Images/cart-icon.png";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import TinyCart from "../../Pages/ShoppingCart/TinyCart";
import Cart from "../../Pages/ShoppingCart/ShoppingCart";

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
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    e.preventDefault();
    setSearchResults([]);
    fetch(`https://api.mediehuset.net/stringsonline/search/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users.slice(0, 20)));
  }, []); // empty dependency array

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
          <Input_Styled type="text" value={searchTerm} onChange={handleChange} placeholder="Search for a user" />

          <Button_Styled>
            <FaArrowRight color="#000000c8" size={25} />
          </Button_Styled>
        </div>
      </HeaderSearchBar>
    </>
  );
};

export default SearchBar;
