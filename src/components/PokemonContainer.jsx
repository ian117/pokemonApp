import React from 'react';
import PokemonItem from './PokemonItem';
import './pokeStyle.css'

const PokeContainer = (props) => {
    const pokemons = props.pokeArray;
    const pokeList = pokemons.map((value) => {
        return <PokemonItem pokeName={value.pokemon.name} pokeType="" pokeImg={value.pokemon.url} key={value.pokemon.name}/>
    });

    //pokeName={} pokeType={} pokeImg={}
    //
    return (
        <div className= "pokeContainer row">
            {pokeList}
        </div>
    )
}

export default PokeContainer;