// Internal Server Error
module.exports = (res, err) =>
	res.status(500).json({ erro: err })
