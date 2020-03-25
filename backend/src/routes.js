const express = require('express')

const OngController = require('./controller/OngController');
const IncidenterController = require('./controller/IncidenterController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');


const routes = express.Router()

//  Rotas e Recursos

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidenterController.index)
routes.post('/incidents', IncidenterController.create);
routes.delete('/incidents/:id', IncidenterController.delete);


module.exports = routes;