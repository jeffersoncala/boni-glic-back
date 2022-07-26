const router = require('express').Router()
// const auth = require('./../../../_config/authentication/index')

const controller = require('../controllers')

router.get('/minhaConta', controller.minhaConta)
router.post('/login/admin', controller.autenticarAdmin)

module.exports = router
