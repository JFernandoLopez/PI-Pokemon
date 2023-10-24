const express = require('express');
const { getPokemons } = require('../controllers/getPokemons');
const { getPokemonsById } = require('../controllers/getPokemosById');
const { getPokemonsByName } = require('../controllers/getPokemonsByName');
const router = express.Router();

router.get('/pokemons', getPokemons);

router.get('/pokemons/:id', getPokemonsById);

router.get('/pokemons/name', getPokemonsByName);

router.post('/pokemons', );

router.get('/types', );

module.exports = {
    router
};