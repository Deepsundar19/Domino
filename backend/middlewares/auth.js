const jwt = require("jsonwebtoken");
const secret_key = "mynameisdeepsundarbehera";

const auth =(req,res,next) =>{
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user =jwt.verify(token,secret_key);
            req.userEmail = user.email;
        }
        else{
            res.status(400).json({message:"Unauthorized user"});
        }
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({message:"Unauthorized User"});
    }
}

module.exports = auth;