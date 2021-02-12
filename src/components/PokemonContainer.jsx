import React from 'react';
import PokemonItem from './PokemonItem';
import './pokeStyle.css'

const PokemonContainer = ( { pokemons } ) => {
    const pokeList = pokemons.map( ( position ) => {
        return <PokemonItem pokeName={ position.pokemon.name } pokeType="" pokeImg={ position.pokemon.url } key={ position.pokemon.name }/>
    });

    return (
        <div className= "pokeContainer row">
            { pokeList }
        </div>
    )
}

export default PokemonContainer;