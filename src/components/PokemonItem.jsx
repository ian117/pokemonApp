import React, {useState,useEffect} from 'react';
import './pokeStyle.css'


const PokemonItem = (props) => {
    const [sprite, setSprite] = useState("");
    useEffect(() => {
        fetch(props.pokeImg)
        .then((response) => response.json())
        .then((data) => setSprite(data.sprites.front_shiny))
    }, [])

    return(
        <div className= "pokeCard">
            <img className="pokeImg" src={sprite}/>
            <h3>{props.pokeName}</h3>
            <p>{props.pokeType}</p>
        </div>
    )
}

export default PokemonItem;