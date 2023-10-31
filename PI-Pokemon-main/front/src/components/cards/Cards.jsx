import { useState, useEffect } from "react";
import Card from "../card/Card";
import axios from 'axios'

const Cards = ({ pokemons, onClose }) => {
    const [pokemonsAded, setPokemonAded] = useState([])

    const firstTwenty = async () => {
        try {
            return (await axios.get('http://localhost:3001')).data;
        } catch (error) {
            console.error('Error fetching first twenty pokemons:', error);
            return [];
        }
    };

    useEffect(() => {
        if (pokemons.length === 0) {
            firstTwenty().then(data => setPokemonAded(data));
        } else {
            setPokemonAded(pokemons);
        }
    }, [pokemons]);
   
    return(
        <div>
            {pokemonsAded?.map(({id, name, image, type_id})=> {
                return <Card
                key={id}
                id={id}
                name={name}
                image={image}
                onClose={onClose}
                type_id={type_id}
                />
            })}
        </div>
    )
}

export default Cards;