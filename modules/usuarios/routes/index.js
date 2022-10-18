const router = require('express').Router()
// const auth = require('./../../../_config/authentication/index')

const controller = require('../controllers')

router.post('/login/admin', controller.loginAdmin)

module.exports = router
