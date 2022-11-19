const router = require('express').Router()
const auth = require('./../../../_config/authentication/index')

const controller = require('../controllers')

router.post('/login/admin', controller.loginAdmin)

router.get('/minha_conta', auth.authorize([global.perfis.administrador, global.perfis.liderCurador, global.perfis.curador, global.perfis.deliveryManager]), controller.minhaConta)

module.exports = router
