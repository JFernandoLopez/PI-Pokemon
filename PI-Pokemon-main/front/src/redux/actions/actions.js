import { FILTER_TYPES, FILTER_ORIGIN, GET_BY_NAME, REMOVE_BY_NAME, GET_DETAILS, ORDEN_ATTACK, ORDEN_ALPHA, GET_FIRST_TWENTY } from '../action-types/action-types';
import axios from 'axios'

export const getFirstTwenty = () => {
    return async (dispatch) => {
        const firstTwenty = (await axios.get(`http://localhost:3001`)).data
        dispatch({type: GET_FIRST_TWENTY, payload: firstTwenty})
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
        const newPokemon = (await axios.get(`http://localhost:3001/name?name=${name}`)).data
        dispatch({type: GET_BY_NAME, payload: newPokemon})
    };
};

export const removeByName = (name) => {
    return ({type: REMOVE_BY_NAME, payload: name})
};

export const getDetails = (name) => {
    return async (dispatch) => {
        const searchPokemon = (await axios.get(`http://localhost:3001/name?name=${name}`)).data
        dispatch({type: GET_DETAILS, payload: searchPokemon})
    };
};

export const filterByType = (types) => {
    return {type: FILTER_TYPES, payload: types}
};

export const filterByOrigin = (origin) => {
    return {type: FILTER_ORIGIN, payload: origin}
};

export const orderAlpha = (orden) => {
    return {type: ORDEN_ALPHA, payload: orden}
};

export const orderAttack = (orden) => {
    return {type: ORDEN_ATTACK, payload: orden}
};