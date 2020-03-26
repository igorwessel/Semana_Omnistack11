const express = require('express')
const OngController = require('./controllers/OngController')

const IncidentController = require('./controllers/IncidentController')

const connection = require('./database/connection')

const routes = express.Router()

routes.post('/ongs', OngController.store)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentController.store)
routes.get('/incidents', IncidentController.index)
module.exports = routes