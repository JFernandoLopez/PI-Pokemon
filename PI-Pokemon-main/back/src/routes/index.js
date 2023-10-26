const express = require('express');
const { getPokemons } = require('../handlers/getPokemons')
const { getPokemonsById } = require('../handlers/getPokemosById')
const { getPokemonsByName } = require('../handlers/getPokemonsByName')
const router = express.Router();

router.get('/', getPokemons);

router.get('/idPokemon/:id', getPokemonsById);

router.get('/name', getPokemonsByName);

router.post('/', );

router.get('/types', );

module.exports = {
    router
};