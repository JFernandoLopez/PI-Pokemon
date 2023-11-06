import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getFirst } from "../../redux/actions/actions";

const Cards = ({ onClose }) => {
    const dispatch = useDispatch()
    const {pokemons, firstTwentys} = useSelector((state) => state)
    const [pokemonsAded, setPokemonAded] = useState([])
    const [auxiliar, setAuxiliar] = useState(false)

    const [actualPage, setActualPage] = useState(1);
    const twelveCards = 12;

    useEffect(() => {
        const fetchData = async () => {
            if (pokemons.length === 0) {
                dispatch(getFirst())
                setPokemonAded(await firstTwentys);
                setAuxiliar(true);
            }
        };
        fetchData();
    }, [pokemons.length === 0]);

    useEffect(() => {
        const fetchData = async () => {
            setPokemonAded(await firstTwentys);
            setAuxiliar(true);
        }
        fetchData();
    }, [firstTwentys])

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