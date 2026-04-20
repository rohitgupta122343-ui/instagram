
const mongoose = require('mongoose')

async function ConnectToDB(){

    mongoose.connect(process.env.MONGO_URI);
    console.log("connected To DB");
    
}

module.exports = ConnectToDB