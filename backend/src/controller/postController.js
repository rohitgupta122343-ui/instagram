
const postModel = require('../models/postModel')
const jwt = require('jsonwebtoken')
const Imagekit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
const likeModel = require('../models/likeModel')

const imagekit = Imagekit({
    privatekey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function postCreateController(req,res){

  
  
  
    
    const file = await imagekit.files.upload({
        file : await toFile(Buffer.from(req.file.buffer),'file'),
        fileName : "test",
        folder : "instagram-clone-post"
    })

   
    

   const post = await postModel.create({
        caption : req.body.caption,
        imgUrl : file.url,
        user:req.user.id
    })

    res.status(201).json({
        message : "post created sucessfully",
        post
    })
    
}

async function getPostController(req,res){

    

    const userId = req.user.id;

    const post = await postModel.find({
        user :userId
    })

    res.status(200).json({
        post
    })

}


async function postDetails(req,res){

  

    const userid = req.user.id;
    const postid = req.params.postid;

    const post = await postModel.findById(postid);

    if(!post){
        res.status(404).json({
            message : "post not found"
        })
    }

    const check = post.user.toString() === userid;
    if(!check){
        res.send("no access this is private  accpunt")
    }

    res.send(post,userid)

}

async function likePostController(req,res){

    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message : "post not found"
        })
    }

   const like = await likeModel.create({
        post : postId,
        user : username
    })

    res.status(201).json({
        message : "like post sucessfully",
        like
    })


}

module.exports = {
    postCreateController,
    getPostController,
    postDetails,
    likePostController
}