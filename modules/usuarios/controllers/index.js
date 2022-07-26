const Service = require('./../services')
module.exports = {
	autenticarAdmin: require('./autenticarAdmin')(Service),
	minhaConta: require('./minhaConta')(Service),
}
