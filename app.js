require('./_config/globals')
require('./_config/db')

const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const allowCors = require('./_config/cors')

const app = express()

// Config acesso LMS
app.use('/galeria', express.static('galeria'))

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '60mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '60mb' }))
app.use(cookieParser())
app.use(allowCors)

// routes
/* Cria as rotas dinamicamente a partir da pasta modules */
let api = {}
let modules = require('./_config/getModules')('./modules/')
const createRoutes = (element, index) => {
	api[element] = require('./modules/' + element + '/routes')
	app.use('/api/' + element, api[element])
}
modules.forEach(createRoutes)

// If no route is matched, it must be 404
app.use((req, res, next) => res.status(404).end())

module.exports = app;
