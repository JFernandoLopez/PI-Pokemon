import { FILTER_TYPES, FILTER_ORIGIN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS, ORDEN_ALPHA, ORDEN_ATTACK , RESET_FILTERS} from '../action-types/action-types';

const initialState = {
    pokemons: [],
    originalPokemons: [],
    detailPokemon: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
                originalPokemons: [...state.originalPokemons, action.payload]
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
            const filteredTypes = state.originalPokemons.filter((pokemon) => pokemon.types.includes(action.payload));
            return {
                ...state,
                pokemons: [...filteredTypes],
            };
            case FILTER_ORIGIN:
            const filteredOrigin = state.originalPokemons.filter((pokemon) => typeof pokemon.id === action.payload);
            return {
                ...state,
                pokemons: [...filteredOrigin],
            };
            case RESET_FILTERS:
            return {
                ...state,
                pokemons: originalPokemons
            }
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

