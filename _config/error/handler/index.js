const erroValidacaoMongoUnique = (err) => (err.name === 'MongoError' && (err.code === 11000 || err.code === 11001))

module.exports = (err, req, res, next) => {
	if (err.status) {
		res.status(err.status).json({ msg: err.msg, data: err.data })
	} else {
		if (err.name === 'ValidationError' || erroValidacaoMongoUnique(err)) {
			return res.status(400).json({ msg: err.message })
		}
		console.log(err.stack)
		res.status(500).json({erro: 'Houve um erro interno', msg: err.message})
	}
}

