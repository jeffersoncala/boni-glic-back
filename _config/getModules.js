const fs = require('fs')
const path = require('path')

const isDirectory = (modulePath, folder) =>
	fs.statSync(path.join(modulePath, folder)).isDirectory()

const isNotCommon = (folder) => (folder !== '_common')

const isValidRoute = (modulePath) => (route) =>
	isDirectory(modulePath, route) && isNotCommon(route)

const getModulesFrom = (modulePath) =>
	fs.readdirSync(modulePath)
		.filter(isValidRoute(modulePath))

module.exports = (modulePath) => getModulesFrom(modulePath)
