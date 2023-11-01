import { FILTER_TYPES, FILTER_ORIGIN, ORDEN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS } from '../action-types/action-types';

const initialState = {
    pokemons: [],
    detailPokemon: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload] 
            }
        case REMOVE_BY_NAME:
            const pokemonsRemoved = [...state.pokemons].filter((pokemon) => pokemon.name !== action.payload)
            return {
                ...state,
                pokemons: pokemonsRemoved
            }
            case GET_DETAILS:
                return { ...state,
                         detailPokemon: action.payload
                };
        default:
            return state;
    }
}

export default reducer;

