const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.post('/signUp' , userController.signUp)
router.post('/login' , userController.login)
router.post('/loginThroughGoogle' , userController.loginThroughGoogle)

module.exports = router