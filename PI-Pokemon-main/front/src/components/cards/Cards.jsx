import { useState, useEffect } from "react";
import Card from "../card/Card";
import axios from 'axios'
import { useSelector } from "react-redux";

const Cards = ({ onClose }) => {
    const {pokemons} = useSelector((state) => state)
    const [pokemonsAded, setPokemonAded] = useState([])
    const [auxiliar, setAuxiliar] = useState(false)

    const firstTwenty = async () => {
        return (await axios.get(`http://localhost:3001/`)).data
        }

    useEffect(() => {
        const fetchData = async () => {
            if (pokemons.length === 0) {
                const response = await firstTwenty();
                setPokemonAded(response);
                setAuxiliar(true);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setPokemonAded([])
        setAuxiliar(false)
    }, [pokemons]);
   
    return(
        <div>
            {pokemons?.map(({id, name, image, type_id})=> {   
                return <Card
                key={id}
                id={id}
                name={name}
                image={image}
                onClose={onClose}
                type_id={type_id}
                auxiliar={auxiliar}
                />
            })}
            {pokemonsAded?.map(({id, name, image, type_id})=> {   
                return <Card
                key={id}
                id={id}
                name={name}
                image={image}
                onClose={onClose}
                type_id={type_id}
                auxiliar={auxiliar}
                />
            })}
        </div>
    )
}

export default Cards;