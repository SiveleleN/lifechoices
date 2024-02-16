import {userRouter,express} from './controller/Usercontroller.js';
import {productRouter} from './controller/Productcontroller.js';
import cookieParser from 'cookie-parser';
import {errorHandling} from './middleware/ErrorHanding.js';
import path from 'path';
import { config } from 'dotenv';
import cors from 'cors'
// create express app
const app = express()
const port = +process.env.PORT || 4000
// middleware
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Request-Methods","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Expose-Headers","Authorization");
next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
  }),
  cookieParser(),
  cors()
)
app.get('^/$|lifechoices', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, "./static/index.html"))
})
app.use('/users', userRouter)
app.use('/product', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port:${port}`);
})
