
const followModel = require('../models/followModel')
const userModel = require('../models/userModel')

async function followUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username 

    
    if(followerUsername == followeeUsername){
        return res.status(400).json({
            message : "you cannot follow yourself"
        })
    }

    const isFolloweeExtist = await userModel.findOne({
        username : followeeUsername
    })

    if(!isFolloweeExtist){
        return res.status(404).json({
            message:"user not extist"
        })
    }

    const alreadyFollow = await followModel.findOne({
        followee:followeeUsername,
        follower : followerUsername
    })

   if (alreadyFollow) {

  if (alreadyFollow.status === "pending") {
    return res.json({
      message: "follow request already sent"
    });
  } 
  else if (alreadyFollow.status === "accepted") {
    return res.json({
      message: "you are already following"
    });
  } 
  else if (alreadyFollow.status === "rejected") {

    
    alreadyFollow.status = "pending";
    await alreadyFollow.save();

    return res.json({
      message: "follow request sent again"
    });
  }

}
    

  


   const followRecord = await followModel.create({
        follower : followerUsername,
        followee : followeeUsername,
        status: "pending" 
    })

    res.status(200).json({
        message : "u r followee" + followeeUsername,
        follow:followRecord
    })

}

async function unfollowUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username 


     const isFolloweeExtist = await userModel.findOne({
        username : followeeUsername
    })

    if(!isFolloweeExtist){
        return res.status(404).json({
            message:"user not extist"
        })
    }


    const isUserFollowing = await followModel.findOne({
        followee:followeeUsername,
        follower : followerUsername
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message : "you r not follow" + followeeUsername
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message : "you have unfollow " + followeeUsername
    })


}

module.exports = {
    followUserController,
    unfollowUserController
}