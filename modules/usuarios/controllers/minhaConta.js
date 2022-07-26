module.exports = (Service) => async (req, res, next) => {
	try {
		const body = req.body
		const usuario = await Service.minhaConta(body)
		return global.callback200(res, usuario)
	} catch (error) {
		return next(error)
	}
}