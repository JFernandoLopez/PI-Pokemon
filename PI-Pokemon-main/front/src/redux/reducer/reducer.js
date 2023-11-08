import { FILTER_TYPES, FILTER_ORIGIN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS, ORDEN_ALPHA, ORDEN_ATTACK , RESET_FILTERS, GET_FIRST_TWENTY, CLEAN_DETAILS} from '../action-types/action-types';

const initialState = {
    pokemons: [],
    originalPokemons: [],
    detailPokemon: [],
    firstTwentys: [],
    originalFirstTwentys: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FIRST_TWENTY:
            return {
                ...state,
                firstTwentys: action.payload,
                originalFirstTwentys: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
                originalPokemons: [...state.originalPokemons, action.payload],
                originalFirstTwentys: []
            };
        case REMOVE_BY_NAME:
            const pokemonsRemoved = [...state.pokemons].filter((pokemon) => pokemon.name !== action.payload)
            const pokemonsRemovedF = [...state.firstTwentys].filter((pokemon) => pokemon.name !== action.payload)
            return {
                ...state,
                pokemons: pokemonsRemoved,
                originalPokemons: pokemonsRemoved,
                firstTwentys: pokemonsRemovedF 
            }
        case GET_DETAILS:
            return { ...state,
                        detailPokemon: action.payload,
                        firstTwentys: [],
                        originalFirstTwentys: []
        };
        case CLEAN_DETAILS:
            return {
                ...state,
                detailPokemon: [],
            };
        case FILTER_TYPES:
        const filteredTypes = state.originalPokemons.filter((pokemon) => pokemon.types.includes(action.payload));
        const filteredFirstTwentys = state.originalFirstTwentys.filter((pokemon) => pokemon.types.includes(action.payload))
        return {
            ...state,
            pokemons: [...filteredTypes],
            firstTwentys: [...filteredFirstTwentys]
        };
        case FILTER_ORIGIN:
        const filteredOrigin = state.originalPokemons.filter((pokemon) => typeof pokemon.id === action.payload);
        const filteredOriginF = state.originalFirstTwentys.filter((pokemon) => typeof pokemon.id === action.payload);
        return {
            ...state,
            pokemons: [...filteredOrigin],
            firstTwentys: [...filteredOriginF]
        };
        case RESET_FILTERS:
        return {
            ...state,
            pokemons: state.originalPokemons,
            firstTwentys: state.originalFirstTwentys
        }
        case ORDEN_ALPHA:
                const filterByOrderAlpha = action.payload == "Alphabeth A-Z" ? [...state.pokemons].sort((a, b) => {
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
                const filterByOrderAlphaFirst = action.payload == "Alphabeth A-Z" ? [...state.firstTwentys].sort((a, b) => {
                    const nameA = a.name 
                    const nameB = b.name
                    if (nameA < nameB) {
                        return -1;
                        }
                        if (nameA > nameB) {
                        return 1;
                        }
                        return 0;
                }) : [...state.firstTwentys].sort((a, b) => {
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
                pokemons: filterByOrderAlpha,
                firstTwentys: filterByOrderAlphaFirst
            }
        case ORDEN_ATTACK:
            const filterByOrderAttack = action.payload === "Attack L-H"
            ? [...state.pokemons].sort((a, b) => a.attack - b.attack)
            : [...state.pokemons].sort((a, b) => b.attack - a.attack);
            const filterByOrderAttackFirst = action.payload === "Attack L-H"
            ? [...state.firstTwentys].sort((a, b) => a.attack - b.attack)
            : [...state.firstTwentys].sort((a, b) => b.attack - a.attack);
            return {
                ...state,
                pokemons: filterByOrderAttack,
                firstTwentys: filterByOrderAttackFirst
            }
        default:
            return state;
    }
}

export default reducer;

