const Repo = require('./../repositories')
// const ServiceObjeto = require('./../../objetos/services')
// const ServiceColecao = require('./../../colecoes/services')

module.exports = {
	autenticarAdmin: require('./autenticarAdmin')(Repo),
}
