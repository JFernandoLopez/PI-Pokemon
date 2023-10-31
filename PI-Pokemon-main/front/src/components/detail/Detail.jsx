import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
    const params = useParams(); //name
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios(`http://localhost:3001/name?name=${params?.name}`)
        .then(({data}) => {
            if(data.name){
                setPokemon(data)
            } else {
                throw alert('Theres no pokemon with that name')
            }
        })
        .catch(() => {
            console.log('Something went too bad')
        })

        return setPokemon({})
    }, [params?.name])

    return(
        <div>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.image} alt={pokemon?.name}/>
            <h5>HP: {pokemon?.hp}</h5>
            <h5>Attack: {pokemon?.attack}</h5>
            <h5>Defense: {pokemon?.defense}</h5>
            <h6>Speed: {pokemon?.speed}</h6>
            <h6>Height: {pokemon?.height}</h6>
            <h6>Weight: {pokemon?.weight}</h6>
            {pokemon?.type_id && pokemon.type_id.map((type, index) => (
                <h4 key={index}>{type}</h4>
            ))}
        </div>
    )
}

export default Detail;