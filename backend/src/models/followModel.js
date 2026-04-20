

const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
     follower : {
        type :String
    },
    followee: {
        type :String
    },
    status : {
        type : String,
        default : "pending",
        enum:{
            values : ["pending","accepted","rejected"],
            message : "status can only pending,accecpt or rejected"
        }
    }
},{
        timestamps : true
    })


followSchema.index({followee : 1, follower : 1}, {unique:true})    

const FollowModel = mongoose.model('follow',followSchema)

module.exports = FollowModel