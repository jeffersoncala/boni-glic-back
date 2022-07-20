// OK
// res.writeHead(200, { 'Content-Type': 'application/json' })
module.exports = (res, data) =>
	res.status(200).json(data)
