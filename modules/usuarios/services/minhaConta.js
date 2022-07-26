const { Erro, ErrorType } = require('./../../../_config/error')
const auth = require('../../../_config/authentication/index')
const criptografaSenha = require('./../../../_config/actions/criptografaSenha')

module.exports = (Repo) => async (body) => {
	try {
		const senha = criptografaSenha(body.senha)
		const usuario = await Repo.minhaConta(body.email, senha)
		if (!usuario.length) {
			throw new Erro(ErrorType.USUARIO_INVALID)
		}

		const objetoUsuario = usuario[0]
		const token = auth.autenticar(objetoUsuario)

		return Object.assign({ token })
	} catch (error) {
		throw error
	}
}
