module.exports = () => {
	const env = process.env.NODE_ENV
	return require(`./../environments/inc/${env}.json`)
}
