const Validator = require('validatorjs')
Validator.useLang('pt')

// validação de uuid
Validator.register('uuid', function (value, requirement, attribute) {
	return value.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i)
}, 'O formato do parâmetro :attribute é inválido ')

module.exports = Validator
