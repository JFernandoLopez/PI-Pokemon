import { useState, useEffect } from "react";
import Card from "../card/Card";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { getFirstTwenty } from "../../redux/actions/actions";

const Cards = ({ pokemons, onClose }) => {
    const [pokemonsAded, setPokemonAded] = useState([])
    const [auxiliar, setAuxiliar] = useState(false)
    const { firstTwentyP } = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(getFirstTwenty());
            setPokemonAded(firstTwentyP);
            setAuxiliar(true);
        } else {
            setPokemonAded(pokemons);
            setAuxiliar(false);
        }
        return () => {}
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
                auxiliar={auxiliar}
                />
            })}
        </div>
    )
}

export default Cards;