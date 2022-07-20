const nodemailer = require('nodemailer')

const Email = {}

Email.enviar = (destinatarios, assunto, conteudo) => {
	const config = {
		host: global.environment.EmailHost,
		port: global.environment.EmailPorta,
		auth: {
			user: global.environment.ApiKey,
			pass: global.environment.EmailSenha
		},
		rejectUnauthorized: true //
	}

	const email = {
		from: global.environment.EmailUsuario,
		to: destinatarios,
		// bcc : '',
		subject: assunto,
		html: conteudo
	}
	console.log(config)
	console.log(email)
	const transport = nodemailer.createTransport(config)

	transport.sendMail(email, (err, info) => {
		if (err) console.log('Erro ao enviar email: ', err)
		// console.log('Email enviado! Leia as informações adicionais: ', info)
	})
}

module.exports = Email
