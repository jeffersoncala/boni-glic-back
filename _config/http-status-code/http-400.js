// Bad Request
module.exports = (res, data) =>
	res.status(400).json({ msg: data })
