const request = require('supertest')
const app = require('../app');
const ActorModel = require('../models');
const Genre = require('../models/Genres');

const URL_BASE = '/api/v1/genres';
const genres = {
    Genre:"Horror",
}

let genreId;

test('Get Genres => should return status 200', async () => {
    const res = await request(app)
    .get(URL_BASE)

    expect(res.statusCode).toBe(200)
})

test('Post Genres => should return status 201', async () =>{
    const res = await request(app)
    .post(URL_BASE)
    .send(genres);
    
    expect(res.statusCode).toBe(201);

    //const createdActor = await ActorModel.findOne({ where: { firstName: actors.firstName } });
    genreId = res.body.id;
})

test('Get by Id => should return status 200', async () => {
    const res = await request(app)
    .get(`${URL_BASE}/${genreId}`);

    expect(res.statusCode).toBe(200);
});

test('Put by Id => should return status 200', async () => {
    const res = await request(app)
    .put(`${URL_BASE}/${genreId}`)
    .send({Genre: "Comedy"});

    expect(res.statusCode).toBe(200);
});


test('Delete by Id => should return status 204', async () => {

    const res = await request(app)
    .delete(`${URL_BASE}/${genreId}`)

    expect(res.status).toBe(204)
});

