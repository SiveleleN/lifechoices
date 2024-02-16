import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index";
import { verifyToken } from "../middleware/userAuthentication";
const userRouter = express.Router();
userRouter.get('/', async (req, res) => {
    try {
        await users.fetchUsers(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users',
        });
    }
});
userRouter.get('/:id', async (req, res) => {
    try {
        await users.fetchUser(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a user',
        });
    }
});
userRouter.post('/register', bodyParser.json(), async (req, res) => { // Added 'async' for asynchronous operation
    try {
        await users.createUser(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to create a new user',
        });
    }
});
export default userRouter.express ;
