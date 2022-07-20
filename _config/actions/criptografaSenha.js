const md5 = require('md5')

const criptografaSenha = (senha) => {
	return md5(senha, global.environment.jwt.salt_key)
}

module.exports = criptografaSenha
