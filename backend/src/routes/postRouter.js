
const express = require('express')
const postRouter = express.Router()
const postController = require('../controller/postController')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})
const isLoggedIn = require('../middleware/isLoggedUser')

postRouter.post('/',upload.single("image"),isLoggedIn,postController.postCreateController)

postRouter.get('/posts',isLoggedIn,postController.getPostController)

postRouter.get('/details/:postid',isLoggedIn,postController.postDetails)

postRouter.post('/like/:postId',isLoggedIn,postController.likePostController)

module.exports = postRouter