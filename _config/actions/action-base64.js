const base64 = {}

const _base64Ok = (arquivo) =>
	(arquivo && arquivo.indexOf('base64,') > 0)

base64.verificaBase64 = (arquivo, nomeDefault) => {
	if (arquivo && _base64Ok(arquivo)) return nomeDefault
	else return ''
}

module.exports = base64
