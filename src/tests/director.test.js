const request = require('supertest')
const app = require('../app');
const ActorModel = require('../models');

const URL_BASE = '/api/v1/directors';
const directors = {
    firstName:"Kevin",
    lastName:"Borge",
    image:"https://hips.hearstapps.com/hmg-prod/images/evolucion-leonardo-dicaprio-17-1573498213.jpg?crop=0.563xw:1.00xh;0.269xw,0&resize=640:*",
    birthday:"2023-03-03"
}

let directorsId = 1;

test('Get Director => should return status 200', async () => {
    const res = await request(app)
    .get(URL_BASE)

    expect(res.statusCode).toBe(200)
})

test('Post directors => should return status 201', async () =>{
    const res = await request(app)
    .post(URL_BASE)
    .send(directors);
    
    expect(res.statusCode).toBe(201);

    //const createdActor = await ActorModel.findOne({ where: { firstName: actors.firstName } });
    directorsId = res.body.id;
})

test('Get by Id => should return status 200', async () => {
    const res = await request(app)
    .get(`${URL_BASE}/${directorsId}`);

    expect(res.statusCode).toBe(200);
});

test('Put by Id => should return status 200', async () => {
    const res = await request(app)
    .put(`${URL_BASE}/${directorsId}`)
    .send({firstName: "Anis"});

    expect(res.statusCode).toBe(200);
});


test('Delete by Id => should return status 204', async () => {
    const res = await request(app)
      .delete(`${URL_BASE}/${actorsId}`);

    await expect(res.statusCode).toBe(204);

    // Verificar que el actor ya no existe en la base de datos
    const deletedActor = await ActorModel.findByPk(actorsId);
    expect(deletedActor).toBeNull();
}, 10000);

