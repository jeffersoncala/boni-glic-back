module.exports = (req) => {
	return req.body.token || req.query.token || req.headers['repov4-token']
}
