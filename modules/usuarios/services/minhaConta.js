const perfis = require('./../../../_config/perfis').perfisDescricao
module.exports = (Repo) => async (id) => {
	try {
		const usuario = await Repo.minhaConta(id)
		const objetoUsuario = usuario[0];
		objetoUsuario.nomePerfil = perfis.find(perfil => perfil.id === objetoUsuario.perfil).nome
		return objetoUsuario
	} catch (error) {
		throw error
	}
}