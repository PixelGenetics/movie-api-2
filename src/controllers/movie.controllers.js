const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genres');
const Actors = require('../models/Actors');
const Directors = require('../models/Directors');

const getAll = catchError(async(req,res) =>{
    const results = await Movie.findAll({ include: [Genre, Actors,Directors]});
    return res.json(results);
})

const create = catchError(async(req,res) => {
    const results = await Movie.create(req.body);
    return res.status(201).json(results);
})

const getOne = catchError(async(req,res) => {
    const {id} = req.params;
    const results = await Movie.findByPk(id, { include: [Genre, Actors,Directors]});
    if(!results) return res.sendStatus(404);
    return res.json(results);
})

const remove = catchError(async(req,res) => {
    const {id} = req.params;
    const result = await Movie.destroy({where: {id}});
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
})

const update = catchError(async(req,res) => {
    const {id} = req.params;
    const results = await Movie.update(
        req.body,
        {where: {id}, returning:true}
    );
    if(results[0] === 0) return res.sendStatus(404);
    return res.json(results[1][0]);
})

const setGenresToMovies = catchError(async (req,res) => {
    const {id} = req.params
    const movie = await Movie.findByPk(id)
    if (!movie) return res.status(404).json({error:"Movie not found"})

    await movie.setGenres(req.body)
    const genres = await movie.getGenres()

    return res.json(genres);

})

const setActorsToMovies = catchError(async(req,res) => {
    const {id} = req.params

    const movie = await Movie.findByPk(id)
    if(!movie) return res.status(404).json({error: "movie not found"})

    await movie.setActors(req.body)
    const actors = await movie.getActors();

    return res.json(actors);
})

const setDirectors = catchError(async(req,res) => {
    const {id} = req.params;

    const movie = await Movie.findByPk(id)
    if(!movie) return res.status(404).json({error: "Movie not found"})

    await movie.setDirectors(req.body)
    const directors = await movie.getDirectors()

    return res.json(directors)

})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenresToMovies,
    setActorsToMovies,
    setDirectors
}