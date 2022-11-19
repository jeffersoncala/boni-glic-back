const minhaConta = (connection) => async (id) => {
	const querySql = `SELECT idLogin, nome, usuario, perfil FROM login WHERE idLogin = ${id}`

	return new Promise(function (resolve, reject) {
		connection.query(querySql,function (err, results) {
			if (err) return reject(err);
			return resolve(results);
		});
	})
}

module.exports = minhaConta;
