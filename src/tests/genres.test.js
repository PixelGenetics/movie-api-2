const request = require('supertest')
const app = require('../app');
const ActorModel = require('../models');
const Genre = require('../models/Genres');

const URL_BASE = '/api/v1/genres';
const genres = {
    Genre:"Horror",
}

// let actorsId = 1;

test('Get Actors => should return status 200', async () => {
    const res = await request(app)
    .get(URL_BASE)

    expect(res.statusCode).toBe(200)
})

test('Post Actors => should return status 201', async () =>{
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
    // const res = await request(app)
    //   .delete(`${URL_BASE}/${actorsId}`);

    // await expect(res.statusCode).toBe(204);

    // // Verificar que el actor ya no existe en la base de datos
    // const deletedActor = await ActorModel.findByPk(actorsId);
    // expect(deletedActor).toBeNull();

    const res = await ActorModel.findOne({where: {firstName:'Kevin'}})??"1";
    const resId = await request(app).delete(`/api/v1/actors/${res.id}`);
    expect(resId.status).toBe(204);

});

