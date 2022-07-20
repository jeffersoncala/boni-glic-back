const path = require('path')

global.TEXTS = require('./languages')('pt-br')
global.appRoot = path.resolve(process.cwd())
global.contentRoot = path.join(global.appRoot, '_content')
global.callback200 = require('./http-status-code').http200
global.callback400 = require('./http-status-code').http400
global.callback401 = require('./http-status-code').http401
global.callback500 = require('./http-status-code').http500
global.erros = require('./error')
global.environment = require('./environments')()
