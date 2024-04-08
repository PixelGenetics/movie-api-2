const catchError = require('../utils/catchError');
const directors = require('../models/Directors');

const getAll = catchError(async(req,res) =>{
    const results = await directors.findAll();
    return res.json(results);
})

const create = catchError(async(req,res) => {
    const results = await directors.create(req.body);
    return res.status(201).json(results);
})

const getOne = catchError(async(req,res) => {
    const {id} = req.params;
    const results = await directors.findByPk(id);
    if(!results) return res.sendStatus(404);
    return res.json(results);
})

const remove = catchError(async(req,res) => {
    const {id} = req.params;
    const result = await directors.destroy({where: {id}});
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
})

const update = catchError(async(req,res) => {
    const {id} = req.params;
    const results = await directors.update(
        req.body,
        {where: {id}, returning:true}
    );
    if(results[0] === 0) return res.sendStatus(404);
    return res.json(results[1][0]);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}