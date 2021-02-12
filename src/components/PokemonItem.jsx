import React, { useState,useEffect } from 'react';
import './pokeStyle.css'

import GetPokemonSprite from './utils/GetPokemonSprite';

const PokemonItem = (props) => {
	const [sprite, setSprite] = useState("");

	useEffect( () => {
		GetPokemonSprite( props.pokeImg )
			.then( ( res ) => setSprite( res.data.sprites.front_shiny ) );
	}, [])

	return(
		<div className= "pokeCard">
			<img className="pokeImg" src={ sprite }/>
			<h3>{ props.pokeName }</h3>
			<p>{ props.pokeType }</p>
		</div>
	)
}

export default PokemonItem;