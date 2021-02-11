import React, { useState } from "react";
import SearchComponent from './components/SearchComponent'

export default function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const doSearch = () => {
    fetch(`https://pokeapi.co/api/v2/type/${search}/`)
      .then((response) => response.json())
      .then((data) => setType(data.name));
  };

  return (
    <div className="App">
    <SearchComponent searchTerm={search} searchHandler={handleSearch} buttonHandler={doSearch}/>
    <div>{type}</div>
    </div>
  );
}