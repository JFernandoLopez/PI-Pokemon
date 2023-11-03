import { FILTER_TYPES, FILTER_ORIGIN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS, ORDEN_ALPHA, ORDEN_ATTACK, GET_FIRST_TWENTY } from '../action-types/action-types';

const initialState = {
    pokemons: [],
    detailPokemon: [],
    firstTwentyP: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FIRST_TWENTY:
            return {
                ...state,
                firstTwentyP: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload] 
            };
        case REMOVE_BY_NAME:
            const pokemonsRemoved = [...state.pokemons].filter((pokemon) => pokemon.name !== action.payload)
            return {
                ...state,
                pokemons: pokemonsRemoved
            };
            case GET_DETAILS:
                return { ...state,
                         detailPokemon: action.payload
            };
            case FILTER_TYPES:
                const filterPokemonsTypes = [...state.pokemons].filter((pokemon) => pokemon.type_id.includes(action.payload))
                return {
                    ...state,
                    pokemons: filterPokemonsTypes
            };
            case FILTER_ORIGIN:
                const filterPokemonOrigin = [...state.pokemons].filter((pokemon) => typeof pokemon.id === action.payload)
                return {
                    ...state,
                    pokemons: filterPokemonOrigin
            };
            case ORDEN_ALPHA:
                    const filterByOrderAlpha = action.payload == "Alphabeth A-L" ? [...state.pokemons].sort((a, b) => {
                        const nameA = a.name 
                        const nameB = b.name
                        if (nameA < nameB) {
                            return -1;
                          }
                          if (nameA > nameB) {
                            return 1;
                          }
                          return 0;
                    }) : [...state.pokemons].sort((a, b) => {
                        const nameB = b.name
                        const nameA = a.name
                        if (nameA > nameB) {
                            return -1;
                          }
                          if (nameA < nameB) {
                            return 1;
                          }
                          return 0;
                    })
                return {
                    ...state,
                    pokemons: filterByOrderAlpha
                }
            case ORDEN_ATTACK:
                const filterByOrderAttack = action.payload === "Attack H-L"
                ? [...state.pokemons].sort((a, b) => a.attack - b.attack)
                : [...state.pokemons].sort((a, b) => b.attack - a.attack);
                return {
                    ...state,
                    pokemons: filterByOrderAttack
                }
        default:
            return state;
    }
}

export default reducer;

