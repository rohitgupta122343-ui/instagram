
const jwt = require('jsonwebtoken')
async function isLoggedIn(req,res,next){
    
  const token = req.cookies.token

  if(!token) {
    return res.status(401).json({
        message: "unauthorized"
    })
  }
  let decode;
  try{ decode = jwt.verify(token,process.env.JWT_SECRET)
}catch(err){
    return res.status(401).json({
        message:"user not authorized"
    })
}

req.user = decode

next()

}

module.exports = isLoggedIn