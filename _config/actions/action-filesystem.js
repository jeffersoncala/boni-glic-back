const fs = require('fs')

const fso = {}

fso.encodeBase64 = (arquivoPath) => {
	let arquivo = fs.readFileSync(arquivoPath)
	// convert binary data to base64 encoded string
	return Buffer.from(arquivo).toString('base64')
}

module.exports = fso
