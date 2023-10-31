import { SEARCH_POKEMON, FILTER } from '../action-types/action-types'
import axios from 'axios'

// export const searchPokemon = (name) => {
//     const endpoint = `http://localhost:3001/name?name=${name}`

//     return async (dispatch) => {
//         try {
//             const pokemon = (await axios(endpoint)).data

//             return dispatch({
//                 type: SEARCH_POKEMON,
//                 payload: pokemon
//             })
//         } catch (error) {
//                 throw alert("Something went wrong")
//         }
//     }
// }

// export const filterTypes = ()