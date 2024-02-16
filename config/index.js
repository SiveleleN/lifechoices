import {  createPool } from "mysql";
import { config } from "dotenv";
config()
let connection = createPool({
    host: process.env.HOST,
    database: process.env.DBname ,
    user: process.env.username,
    password: process.env.userpass,
    multipleStatements: true ,
    connectionLimitL: 30
})
export{
}