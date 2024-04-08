const {getAll, create, getOne, remove, update, setGenres} = require('../controllers/actors.controllers');

const express = require('express');

const routerActors = express.Router();

routerActors.route('/')
    .get(getAll)
    .post(create);

routerActors.route('/:id/genres')
    .post(setGenres);

routerActors.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerActors;