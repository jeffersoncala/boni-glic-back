class Unauthorized extends Error {
	constructor (...args) {
		super(...args)
		Error.captureStackTrace(this, Unauthorized)
	}

	get status () {
		return 401
	}
	get msg () {
		return global.TEXTS.restrict_access
	}
}

module.exports = Unauthorized
