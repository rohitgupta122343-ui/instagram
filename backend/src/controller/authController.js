
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerContoller(req,res){
    
    const {email,username,password,bio,profileImage} = req.body;

    
    

   const userAlreadyExtist = await userModel.findOne({
        $or : [
            {username},{email}
        ]
    })

    if(userAlreadyExtist){
        return res.status(409).json({
            message : "user already extist" + (userAlreadyExtist.email == email?
                 "email extist" :   "username already extist"
            )
        })
    }

    const hash = await bcrypt.hash(password,10)

   const user = await  userModel.create({
        username,
        email,
        bio,
        profileImage,
        password : hash
    })
    
    const token = jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:"1d"});

        

    res.cookie("token",token)

    res.status(201).json({
        message : "user created sucessfully",
        user : {
            username : user.username,
            email : user.email,
            bio : user.bio,
            profileImage : user.profileImage
        }
    })

}

async function loginController(req,res){

    const {username,email,password} = req.body;

   const user = await  userModel.findOne({
        $or : [
            {username:username},{email:email}
        ]
    }).select("+password")

    if(!user) {
        return res.status(404).json({
            message : "user not found"
        })
    }


    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(404).json({
            message:"password is wrong"
        })
    }

    const token = jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token);

    res.status(201).json({
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio
        }
    })

}

async function getmeController(req,res){

    const userId = req.user.id;

    const user = await userModel.findById(userId);
     console.log(user);
    if(!user){
        return res.status(404).json({
            message : "user not found"
        })
    }

   
    

    res.status(200).json({
        message : "get me",
        user : {
            username : user.username,
            email : user.email,
            bio : user.bio,
            profileImage : user.profileImage
        }
    })

    
}

module.exports = {
    registerContoller, loginController,getmeController
}