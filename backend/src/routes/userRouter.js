
const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')
const isLoggedIn = require('../middleware/isLoggedUser')

userRouter.post('/follow/:username',isLoggedIn,userController.followUserController)

userRouter.post('/unfollow/:username',isLoggedIn,userController.unfollowUserController)

module.exports = userRouter