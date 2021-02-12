import React from 'react';
import axios from 'axios';

const GetPokemonSprite = async ( URL ) => {
	try {
		return await axios.get( URL );
	} catch {
		console.error( 'error retrieving pokemon sprite!' );
	}
}

export default GetPokemonSprite;