class InvalidLogin extends Error {
	constructor (...args) {
		super(...args)
		Error.captureStackTrace(this, InvalidLogin)
	}

	get status () {
		return 401
	}
	get msg () {
		return global.TEXTS.login_invalid
	}
}

module.exports = InvalidLogin
