const fs = require('fs')
const unzip = require('unzip')

const extrairZip = ({ origem, destino }) =>
	fs.createReadStream(origem)
		.pipe(unzip.Extract({ path: destino }))

module.exports = { extrairZip }
