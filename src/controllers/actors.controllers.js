const catchError = require('../utils/catchError');
const Actors = require('../models/Actors');
const Genre = require('../models/Genres');

const getAll = catchError(async(req,res) =>{
    const results = await Actors.findAll();
    return res.json(results);
})

const create = catchError(async(req,res) => {
    const results = await Actors.create(req.body);
    return res.status(201).json(results);
})

const getOne = catchError(async(req,res) => {
    const {id} = req.params;
    const results = await Actors.findByPk(id);
    if(!results) return res.sendStatus(404);
    return res.json(results);
})

const remove = catchError(async(req,res) => {
    const {id} = req.params;
    const result = await Actors.destroy({where: {id}});
    if(!result) return res.sendStatus(404);
    return res.status(204);
})

const update = catchError(async(req,res) => {
    const {id} = req.params;
    const results = await Actors.update(
        req.body,
        {where: {id}, returning:true}
    );
    if(results[0] === 0) return res.sendStatus(404);
    return res.json(results[1][0]);
})

const setGenres = catchError(async(req,res) => {
    const {id} = req.params;
    const actor = await Actors.findByPk(id);

    await actor.setGenres(req.body)
    const genres = await actor.getGenres();

    return res.json(genres);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenres
}