const loginAdmin = (connection) => async (usuario, senha) => {
	const querySql = `SELECT idLogin, nome, usuario, perfil FROM login WHERE usuario = '${usuario}' AND senha = '${senha}';`

	return new Promise(function (resolve, reject) {
		connection.query(querySql,function (err, results) {
			if (err) return reject(err);
			return resolve(results);
		});
	})
}

module.exports = loginAdmin;
