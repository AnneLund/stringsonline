import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchPage = styled.section`
  padding: 2em;
`;

const CardContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    e.preventDefault();
    setSearchResults([]);
    fetch(`https://api.mediehuset.net/stringsonline/search/${keyword}`)
      .then((res) => res.json())
      .then((data) => setSearchResults(data.users))
      .catch((err) => console.log(err));
  };

  return (
    <SearchPage>
      <h1>Søg efter en bruger</h1>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for a user" />
      <CardContainer>
        {searchResults?.map((result) => (
          <Card key={result.id}>
            <img src={result.image} />
            <figcaption>
              {result.firstName}
              {result.lastName}
            </figcaption>
          </Card>
        ))}
      </CardContainer>
    </SearchPage>
  );
}

export default Search;
