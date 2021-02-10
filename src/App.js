import "./styles.css";
import React, { useState } from "react";

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
      <input onChange={handleSearch} value={search} />
      <button type="button" onClick={doSearch}>
        search
      </button>
      <div>{type}</div>
    </div>
  );
}