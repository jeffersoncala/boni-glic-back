module.exports = (Service) => async (req, res, next) => {
	try {
		const usuario = req.body.usuario
		const senha = req.body.senha
		const result = await Service.loginAdmin(usuario, senha)
		return global.callback200(res, result)
	} catch (error) {
		return next(error)
	}
}
