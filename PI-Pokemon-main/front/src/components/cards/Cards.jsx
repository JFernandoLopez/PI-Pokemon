import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import axios from 'axios'
import { useSelector } from "react-redux";

const Cards = ({ onClose }) => {
    const {pokemons} = useSelector((state) => state)
    const [pokemonsAded, setPokemonAded] = useState([])
    const [auxiliar, setAuxiliar] = useState(false)

    const [actualPage, setActualPage] = useState(1);
    const twelveCards = 12;

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

    const iLastCard =  actualPage * twelveCards;
    const iFirstCard = iLastCard - twelveCards;
    const actualCards = [...pokemons, ...pokemonsAded].slice(iFirstCard, iLastCard);

    const onPageChange = (pageNumber) =>  setActualPage(pageNumber)
   
    return(
        <div>
            {actualCards?.map(({ id, name, image, types }) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    onClose={onClose}
                    types={types}
                    auxiliar={auxiliar}
                />
            })}
            <Pagination
                twelveCards={twelveCards}
                allCards={[...pokemons, ...pokemonsAded].length}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default Cards;