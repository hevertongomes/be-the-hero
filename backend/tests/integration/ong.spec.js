const request = require('supertest');
const app = require('../../src/app');
const conection = require("../../src/database/connection");

describe('ONG', () => {

    beforeEach(async() => {
        await conection.migrate.rollback(); // Zera o banco para fazer o teste
        await conection.migrate.latest();
    });

    afterAll(async() => {
        await conection.destroy();
    });

    it('sould be able to create a new ONG', async() => {
        const response = await request(app)
            .post('/ongs')
            // Para setar a autorizaração .set('Authorizathion', 'id-ong')
            .send({
                name: "APTA2",
                email: "nameapata@gmail.com",
                whatsapp: "98833-2131",
                city: "Gramado",
                uf: "RS"
            });
        
        // console.log(response.body); // Visualizar resultado
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});