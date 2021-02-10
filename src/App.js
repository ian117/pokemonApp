import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeContainer from "./components/PokemonContainer"

export default function App() {
  const [dataPokemon, setDataPokemon] = useState({
    arrayPokemon: [],
    error: false,
    messageError: "",
  });
  const [loading, setLoading] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const getPokemonTypes = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/type/`;
        const res = await axios.get(url);
        setPokemonTypes(res.data.results);
        setLoading(false);
      } catch {
        console.error("error");
      }
    };
    getPokemonTypes();
  }, []);

  useEffect(() => {
    const getListPokemonByType = async (pokemonTypes, searchType) => {
      setLoading(true);
      const pokemonType = pokemonTypes.find((type) => type.name === searchType);
      const isValidType = !!pokemonType;
      console.log(pokemonType);

      if (isValidType) {
        try {
          const url = pokemonType.url;
          const res = await axios.get(url);
          setDataPokemon({
            arrayPokemon: res.data.pokemon.splice(0,10),
            error: false,
            messageError: "",
          });
        } catch {
          console.error("error");
        }
      } else {
        setDataPokemon({
          arrayPokemon: [],
          error: true,
          messageError: `Pokemon Type "${searchType}" does not exists`,
        });
      }
      setLoading(false);
    };
    if (pokemonTypes.length > 0) {
      getListPokemonByType(pokemonTypes, "fire");
    }
  }, [pokemonTypes]);

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      {loading && <p>loading...</p>}
      {!loading && <p>Componente De Busqueda</p>}
      {dataPokemon.arrayPokemon.length > 0 &&
        <PokeContainer pokeArray={dataPokemon.arrayPokemon}/>
      }
    </div>
  );
}