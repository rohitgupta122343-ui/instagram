
const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRouter = require('./routes/authRouter')
const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRouter')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin : "https://instagram-fa-git-main-rohitgupta122343-uis-projects.vercel.app"
}))

app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
app.use('/api/users',userRouter)

module.exports = app