import express from "express";
import bodyParser from "body-parser";
import {users} from "../model/index.js"
import { verifyToken } from "../middleware/userAunthentication.js";
const userRouter = express.Router()
// fetch users
userRouter.get('/',(req,res )=> {
    try {
        users.fetchUsers(req,res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
// add s user
userRouter.post('/register' ,bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Could not add a new user"
        })
    }
})
export{
    userRouter,
    express
}
