const express = require('express');
const routerGenre = require('./genre.routes');
const routerActors = require('./actors.routes');
const routerDirector = require('./director.routes');
const routerMovie = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre);
router.use('/actors', routerActors);
router.use('/directors', routerDirector);
router.use('/movies', routerMovie);


module.exports = router;