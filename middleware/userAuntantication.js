
import {config} from "dotenv";
config()
import {sign,verify} from "jsonwebtoken";
function createToken(user){
return sign({
    emailAdd: user.emailAdd,
    userPwd: user.userPwd
},
process.env.SECRET_KEY,
{
    expiresIn: '1h'
}
)
}
function verifyToken(req, res, next) {
    //Retrieve a token from the browser
    const token = req.headers['Authorization']
    if(token) {
if(verify(token, process.env.SECRET_KEY)){
    next()
}else {
    res?.json({
        status: res.statusCode,
        msg: "please provide the correct credentials."
    })
}
    }else {
        res?.json({
            status: res.statusCode,
            msg: "please login"
        } )
    }
}
export {
    createToken,
    verifyToken
}
