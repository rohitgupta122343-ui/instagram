
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    caption:{
        type : String,
        default : ""
    },
    imgUrl:{
        type : String,
        require : [true,"image is require to creating an post"]
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "user",
        require : [true,"user id is require"]
    }
})

const postModel = mongoose.model("post",postSchema);

module.exports = postModel