const { connection } = require('./../../../_config/db')

module.exports = {
	loginAdmin: require('./loginAdmin')(connection),
	minhaConta: require('./minhaConta')(connection)
}
