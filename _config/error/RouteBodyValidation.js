class RouteBodyValidation extends Error {
	constructor (...args) {
		super(...args)
		Error.captureStackTrace(this, RouteBodyValidation)
		this.dadosNaoEncontrados = args[0].dadosNaoEncontrados
	}
	get status () {
		return 412
	}
	get msg () {
		return `${global.TEXTS.invalidRouterFields}: ${this.dadosNaoEncontrados}`
	}
}

module.exports = RouteBodyValidation
