import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions/actions";

const Detail = () => {
    const params = useParams(); //name
    const detailPokemon = useSelector((state) => state.detailPokemon)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(params.name))
        return () => {}
    }, [params?.name])

    return(
        <div>
            <h2>{detailPokemon?.name}</h2>
            <img src={detailPokemon?.image} alt={detailPokemon?.name} height='300px'/>
            <h5>HP: {detailPokemon?.hp}</h5>
            <h5>Attack: {detailPokemon?.attack}</h5>
            <h5>Defense: {detailPokemon?.defense}</h5>
            <h6>Speed: {detailPokemon?.speed}</h6>
            <h6>Height: {detailPokemon?.height}</h6>
            <h6>Weight: {detailPokemon?.weight}</h6>
            {detailPokemon?.type_id && detailPokemon?.type_id.map((type, index) => (
                <h4 key={index}>{type}</h4>
            ))}
        </div>
    )
}

export default Detail;