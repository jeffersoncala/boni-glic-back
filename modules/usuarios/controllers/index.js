const Service = require('./../services')
module.exports = {
	loginAdmin: require('./loginAdmin')(Service),
	minhaConta: require('./minhaConta')(Service),
}
