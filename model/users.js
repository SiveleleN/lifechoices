import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/userAunthentication.js";
class Users {
    fetchUsers(req, res) {
        const qry = `SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole FROM users;`;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchUserById(req, res) {
        const qry = `SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole FROM users WHERE userID = ?;`;
        db.query(qry, [req.params.id], (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            });
        });
    }
    async createUser(req, res) {
        try {
            let data = req.body;
            data.userPwd = await hash(data.userPwd, 10);
            const user = {
                emailAdd: data.emailAdd,
                userPwd: data.userPwd
            };
            const qry = `INSERT INTO users SET ?;`;
            db.query(qry, user, (err) => {
                if (err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'This email already exists'
                    });
                } else {
                    let token = createToken(user);
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: 'You are registered'
                    });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
export {
Users
}
