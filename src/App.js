import React, { useEffect, useState } from "react";

import "./App.css";
import { Spinner } from "react-bootstrap";

import PokemonContainer from "./components/PokemonContainer";
import SearchComponent from "./components/SearchComponent"

import GetPokemonAllTypes from './components/utils/GetPokemonAllTypes';
import GetPokemonTypeStandalone from './components/utils/GetPokemonTypeStandalone';

export default function App() {
	const [dataPokemon, setDataPokemon] = useState( new Array() );
	const [pokemonTypes, setPokemonTypes] = useState( new Array() );

	const [actualType, setActualType] = useState('fire');
	const [isLoading, setLoading] = useState( false );

	const [buttonStatus, setButtonStatus] = useState( false );

	useEffect(() => {
		setLoading( false );
		GetPokemonAllTypes( setPokemonTypes );
	}, []);

	useEffect(() => {
		setLoading( true );

		if ( pokemonTypes.length ) {
			GetPokemonTypeStandalone( pokemonTypes, actualType)
				.then( ( res ) => setDataPokemon( res.data.pokemon.splice(0, 15) ) );
		}

		setLoading( false );
	}, [ pokemonTypes ]);

	useEffect(() => {
		setLoading( true );

		if ( pokemonTypes.length ) {
			GetPokemonTypeStandalone( pokemonTypes, actualType )
				.then( ( res ) => setDataPokemon( res.data.pokemon.splice(0, 15) ) );
		}

		setLoading( false );
	}, [ buttonStatus ]);

	return (
		<div className="App">
			<div className="App-header">
				<h1>Pokemon App</h1>
				<SearchComponent searchTerm={ actualType } searchHandler={ setActualType } />
				<button onClick={ () => setButtonStatus( ( prevStatus ) => !prevStatus ) }> Search </button>
				{ ( isLoading ) ?
					<Spinner animation="grow" role="status" />
					:
					<PokemonContainer pokemons={ dataPokemon } />
				}
			</div>
		</div>
	);
}