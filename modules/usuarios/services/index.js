const Repo = require('./../repositories')

module.exports = {
	loginAdmin: require('./loginAdmin')(Repo),
	minhaConta: require('./minhaConta')(Repo)
}
