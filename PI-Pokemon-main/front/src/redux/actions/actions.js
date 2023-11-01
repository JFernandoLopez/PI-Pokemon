import { FILTER_TYPES, FILTER_ORIGIN, ORDEN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS } from '../action-types/action-types';
import axios from 'axios'

export const getByName = (name) => {
    return async (dispatch) => {
        const newPokemon = (await axios.get(`http://localhost:3001/name?name=${name}`)).data
        dispatch({type: GET_BY_NAME, payload: newPokemon})
    }
}

export const removeByName = (name) => {
    return ({type: REMOVE_BY_NAME, payload: name})
}

export const getDetails = (name) => {
    return async (dispatch) => {
        const searchPokemon = (await axios.get(`http://localhost:3001/name?name=${name}`)).data
        dispatch({type: GET_DETAILS, payload: searchPokemon})
    }
}

// export const filterByType = (type, pokemons) => {
//     // return async(dispatch) => {
//     //     try {
//     //         const typeIndicated = await Promise.all(pokemons?.filter((pokemon) => pokemon.type_id.includes(type)))
            
//     //         return dispatch({
//     //             type: FILTER_TYPES,
//     //             payload: typeIndicated
//     //         })
//     //     } catch (error) {
//     //         throw alert("Movement failed")
//     //     }
//     // }
// }

// export const filterByOrigin = (id, pokemons) => {
//     return async(dispatch) => {
//         try {
//             const originFilter = await Promise.all(pokemons?.filter((pokemon) => pokemon.id))
//         } catch (error) {
            
//         }
//     }
// }