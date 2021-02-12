import React from 'react';
import axios from 'axios';

const GetPokemonTypeStandalone = async ( pokemonTypes, filterType ) => {
  const pokemonType = pokemonTypes.find( ( type ) => type.name === filterType );
  const isValidType = ( pokemonType ) ? true : false;

	if ( isValidType ) {
    try {
			const URL = pokemonType.url;
			return await axios.get( URL );
		}
		catch {
			console.error("error");
		}
	}
}

export default GetPokemonTypeStandalone;