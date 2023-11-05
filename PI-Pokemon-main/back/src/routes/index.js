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

const validate = (req, res, next) => {
    const {name, image, hp, attack, defense, speed, height, weight, types} = req.body;
    if(!name){return res.status(400).json({error: "Missing data"})};
    if(!image){return res.status(400).json({error: "Missing data"})};
    if(!hp){return res.status(400).json({error: "Missing data"})};
    if(!attack){return res.status(400).json({error: "Missing data"})};
    if(!defense){return res.status(400).json({error: "Missing data"})};
    if(!speed){return res.status(400).json({error: "Missing data"})};
    if(!height){return res.status(400).json({error: "Missing data"})};
    if(!weight){return res.status(400).json({error: "Missing data"})};
    if(!types){return res.status(400).json({error: "Missing data"})};

    next();
}
router.post('/pokemon', validate, postPokemon);

router.get('/types', getTypes);

module.exports = {
    router
};