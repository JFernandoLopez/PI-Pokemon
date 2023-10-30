const express = require('express');
const { getPokemons } = require('../handlers/getPokemons')
const { getPokemonsById } = require('../handlers/getPokemosById')
const { getPokemonsByName } = require('../handlers/getPokemonsByName');
const { postPokemon } = require('../handlers/postPokemons');
const { getTypes } = require('../handlers/getTypes');
const router = express.Router();

router.get('/', getPokemons);

router.get('/pokemon/:id', getPokemonsById);

router.get('/name', getPokemonsByName);

router.post('/', postPokemon);

router.get('/types', getTypes);

module.exports = {
    router
};