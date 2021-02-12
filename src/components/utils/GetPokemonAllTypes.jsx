import React from 'react';
import axios from 'axios';

const GetPokemonAllTypes = async ( setPokemonTypes ) => {
	try {
		const res = await axios.get( process.env.REACT_APP_POKEMON_TYPE );
		setPokemonTypes( res.data.results );
	} catch {
		console.error("error");
	}
}

export default GetPokemonAllTypes;