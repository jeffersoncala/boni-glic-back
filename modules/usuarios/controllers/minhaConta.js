module.exports = (Service) => async (req, res, next) => {
	const id = req.tokenDecoded.id
	try {
		const usuario = await Service.minhaConta(id)
		return global.callback200(res, usuario)
	} catch (error) {
		return next(error)
	}
}
