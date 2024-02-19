import {  createPool } from "mysql";
// import { config } from "dotenv";
import "dotenv/config"
//config()
let connection = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_Name ,
    user: process.env.DB_UserName,
    password: process.env.DB_Userpass,
    multipleStatements: true ,
    connectionLimitL: 30
})
export{
    connection
}