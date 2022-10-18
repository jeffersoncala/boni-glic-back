const { Erro, ErrorType } = require('../../../_config/error')
const auth = require('../../../_config/authentication/index')


module.exports = (Repo) => async (usuario, senha) => {
	try {
		  const result = await Repo.loginAdmin(usuario, senha);

		  if (!result.length) {
			  throw new Erro(ErrorType.USUARIO_INVALID)
		  }

		  const objetoUsuario = result[0]
		  const token = auth.autenticar(objetoUsuario)
  
		  return Object.assign({ token })

	} catch (error) {
		throw error
	}
}