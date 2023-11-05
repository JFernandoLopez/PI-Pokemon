import { FILTER_TYPES, FILTER_ORIGIN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS, ORDEN_ATTACK, ORDEN_ALPHA, RESET_FILTERS, GET_FIRST_TWENTY } from '../action-types/action-types';
import axios from 'axios'

export const getFirst = () => {
    return async (dispatch) => {
        try {
            const firstPok = (await axios.get(`http://localhost:3001`)).data;
            dispatch({ type: GET_FIRST_TWENTY, payload: firstPok });
        } catch (error) {
            alert("Something went wrong");
            console.error('Error fetching data:', error);
        }
    };
}

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const newPokemon = (await axios.get(`http://localhost:3001/name?name=${name}`)).data;
            dispatch({ type: GET_BY_NAME, payload: newPokemon });
        } catch (error) {
            alert("This pokemon could'nt exist yet");

            console.error('Error fetching data:', error);
        }
    };
};

export const removeByName = (name) => {
    return ({type: REMOVE_BY_NAME, payload: name})
};

export const getDetails = (name) => {
    return async (dispatch) => {
        try {
            const searchPokemon = (await axios.get(`http://localhost:3001/name?name=${name}`)).data
            dispatch({type: GET_DETAILS, payload: searchPokemon})
        } catch (error) {
            alert("Something went wrong searching details");

            console.error('Error fetching data:', error);
        }
    };
};

export const filterByType = (types) => {
    return {type: FILTER_TYPES, payload: types}
};

export const filterByOrigin = (origin) => {
    return {type: FILTER_ORIGIN, payload: origin}
};

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    };
};

export const orderAlpha = (orden) => {
    return {type: ORDEN_ALPHA, payload: orden}
};

export const orderAttack = (orden) => {
    return {type: ORDEN_ATTACK, payload: orden}
};