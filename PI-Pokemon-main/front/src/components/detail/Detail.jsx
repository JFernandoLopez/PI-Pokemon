import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetails, getDetails } from "../../redux/actions/actions";
import './detail.css'

const Detail = () => {
    const params = useParams(); //name
    const {detailPokemon} = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(params.name))
        return () => dispatch(cleanDetails())
    }, [params?.name])


    return(
        <div className="detailP">
            <h2 className="detailP">{detailPokemon?.name}</h2>
            <img className="detailP" src={detailPokemon?.image} alt={detailPokemon?.name} height='300px'/>
            <h5 className="hpP">HP: {detailPokemon?.hp}</h5>
            <h5 className="attackP">Attack: {detailPokemon?.attack}</h5>
            <h5 className="defenseP">Defense: {detailPokemon?.defense}</h5>
            <h6 className="speedP">Speed: {detailPokemon?.speed}</h6>
            <h6 className="heightP">Height: {detailPokemon?.height}</h6>
            <h6 className="weightP">Weight: {detailPokemon?.weight}</h6>
            {detailPokemon?.types && detailPokemon?.types.map((type, index) => (
                <h4 key={index} className="detailP">{type}</h4>
            ))}
        </div>
    )
}

export default Detail;