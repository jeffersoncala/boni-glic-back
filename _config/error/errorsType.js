module.exports = {
	USUARIO_INVALID: {
		status: 401,
		message: global.TEXTS.login_invalid
	},
	EMAIL_JA_CADASTRADO: {
		status: 400,
		message: global.TEXTS.email_ja_cadastrado
	},
	UNAUTHORIZED: {
		status: 401,
		message: global.TEXTS.restrict_access
	},
	INVALID_TOKEN: {
		status: 401,
		message: global.TEXTS.invalid_token
	},
	INVALID_DOMINIO: {
		status: 401,
		message: global.TEXTS.invalid_dominio
	},
	NO_TOKEN: {
		status: 401,
		message: global.TEXTS.no_token
	},
	TOKEN_DE_RECUPERACAO_EXPIRADO: {
		status: 401,
		message: global.TEXTS.token_recuperacao_expirado
	},
	CLIENTE_INVALIDO: {
		status: 400,
		message: global.TEXTS.cliente_invalido
	},
	ALUNO_NAO_CADASTRADO: {
		status: 400,
		message: global.TEXTS.aluno_nao_cadastrado
	},
	TEMA_NAO_ENCONTRADO: {
		status: 400,
		message: global.TEXTS.tema_nao_encontrado
	}
}
