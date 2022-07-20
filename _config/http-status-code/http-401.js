// Unauthorized
module.exports = (res, data) =>
	res.status(401).json({ msg: data })
