
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        unique : [true, "username already extist"],
        require : [true, "username is require"]
    },
    email : {
        type : String,
        unique : [true, "email alredy extist"],
        require : [true, "email is require"]
    },
    password : {
        type : String,
        require : [true, "password is require"]
    },
    bio : String,
    profileImage : {
        type : String,
        default : "https://ik.imagekit.io/0wmauyftj/images.jfif"
    },
   

})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;