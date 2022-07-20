const jwt = require('jsonwebtoken')
const getToken = require('./../getToken')
const { Erro, ErrorType } = require('./../../../_config/error')
const saltKey = global.environment.jwt.salt_key
const expiresIn = global.environment.jwt.time_expires_token

const JWT = {}

const verificaToken = (token) => new Promise((resolve, reject) => {
	jwt.verify(token, saltKey, (err, tokenDecoded) => {
		if (err) {
			reject(new Erro(ErrorType.INVALID_TOKEN))
		} else {
			resolve(tokenDecoded)
		}
	})
})

const perfilValido = (perfisAutorizados, perfisDoUsuario) => {
	if (perfisAutorizados === undefined || perfisAutorizados.length === 0) {
		return true
	} else {
		return perfisAutorizados.includes(perfisDoUsuario)
	}
}

JWT.autenticar = (usuario) => {
	const loginData = {
		id: usuario.id,
		nome: usuario.nome,
		email: usuario.email,
		perfil: usuario.perfil
	}
	const options = { expiresIn }
	return jwt.sign(loginData, saltKey, options)
}

JWT.authorize = async (perfisAutorizados, req, res, next) => {
	try {
		let token = getToken(req)

		if (!token) {
			console.log('================ Ñ VALIDADO 1')
			throw new Erro(ErrorType.NO_TOKEN)
		}
		const tokenDecoded = await verificaToken(token)

		if (perfilValido(perfisAutorizados, tokenDecoded.perfil)) {
			req.tokenDecoded = tokenDecoded
			return next()
		} else {
			console.log('================ Ñ VALIDADO')
			throw new Erro(ErrorType.INVALID_TOKEN)
		}
	} catch (err) {
		next(err)
	}
}

JWT.isAdmin = (req, res, next) => {
	let token = getToken(req)

	if (!token) throw new Erro(ErrorType.UNAUTHORIZED)
	else {
		jwt.verify(token, saltKey, (err, tokenDecoded) => {
			if (err) throw new Erro(ErrorType.INVALID_TOKEN)
			else {
				if (tokenDecoded.admin) next()
				else throw new Erro(ErrorType.UNAUTHORIZED)
			}
		})
	}
}

JWT.getUser = (req, res, next) => {
	let token = getToken(req)

	if (!token) throw new Erro(ErrorType.UNAUTHORIZED)
	else {
		jwt.verify(token, saltKey, (err, tokenDecoded) => {
			if (err) throw new Erro(ErrorType.INVALID_TOKEN)
			else {
				req.tokenDecoded = tokenDecoded
				next()
			}
		})
	}
}

module.exports = JWT
