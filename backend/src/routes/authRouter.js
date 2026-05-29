
const express = require('express')
const authRouter = express.Router()
const authController = require('../controller/authController')
const isLoggedIn = require('../middleware/isLoggedUser')

authRouter.post('/register',authController.registerContoller)

authRouter.post('/login',authController.loginController)

authRouter.get('/get-me',isLoggedIn,authController.getmeController)

authRouter.delete('/logout',authController.logoutController)

module.exports = authRouter;