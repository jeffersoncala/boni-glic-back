class NoToken extends Error {
	constructor (...args) {
		super(...args)
		Error.captureStackTrace(this, NoToken)
	}

	get status () {
		return 400
	}
	get msg () {
		return global.TEXTS.no_token
	}
}

module.exports = NoToken
