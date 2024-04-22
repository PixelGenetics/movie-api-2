const request = require('supertest')
const app = require('../app');
const ActorModel = require('../models/Actors');

const URL_BASE = '/api/v1/actors';
const actors = {
    firstName:"Kevin",
    lastName:"Borge",
    image:"https://hips.hearstapps.com/hmg-prod/images/evolucion-leonardo-dicaprio-17-1573498213.jpg?crop=0.563xw:1.00xh;0.269xw,0&resize=640:*",
    birthday:"2023-03-03"
}

let actorsId = 1;

test('Get Actors => should return status 200', async () => {
    const res = await request(app)
    .get(URL_BASE)

    expect(res.statusCode).toBe(200)
})

test('Post Actors => should return status 201', async () =>{
    const res = await request(app)
    .post(URL_BASE)
    .send(actors);
    
    expect(res.statusCode).toBe(201);

    //const createdActor = await ActorModel.findOne({ where: { firstName: actors.firstName } });
    actorsId = res.body.id;
})

test('Get by Id => should return status 200', async () => {
    const res = await request(app)
    .get(`${URL_BASE}/${actorsId}`);

    expect(res.statusCode).toBe(200);
});

test('Put by Id => should return status 200', async () => {
    const res = await request(app)
    .put(`${URL_BASE}/${actorsId}`)
    .send({firstName: "Anis"});

    expect(res.statusCode).toBe(200);
});



test('Delete by Id => should return status 204', async () => {
    const res = await ActorModel.findOne({where: {firstName:'Kevin'}})??"1";
    // const res2 = await request(app)
    // .post(URL_BASE)
    // .send(actors);
    const resId = await request(app).delete(`/api/v1/actors/${actorsId}`);
    expect(resId.status).toBe(204);
});

