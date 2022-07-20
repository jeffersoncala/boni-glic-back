const JWT = require('./jwt')

const Authentication = {}

Authentication.autenticar = (res, usuario, callback) =>
	JWT.autenticar(res, usuario, callback)

Authentication.authorize = (perfis) => (req, res, next) =>
	JWT.authorize(perfis, req, res, next)

Authentication.isAdmin = (req, res, next) =>
	JWT.isAdmin(req, res, next)

Authentication.getUser = (req, res, next) =>
	JWT.getUser(req, res, next)

module.exports = Authentication
