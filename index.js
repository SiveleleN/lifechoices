import { userRouter, express } from "./CONTROLLER/userController.js"
import { productRouter } from "./CONTROLLER/productController.js"
import { cookieParser } from "cookie-parser"
import { errorHandling  } from "./middleware/errorHandling.js"
import { path } from "path"
import { config  } from "dotenv"
config()

const app = express()
const port = ++process.env.PORT ||4000
// middleware
app.use((req, res, next) =>{
  res.header("Access-control-Allow-Origin", "*");
  res.header("Access-control-Allow-Credentials", "true");
  res.header("Access-control-Allow-Methods", "*");
  res.header("Access-control-Request-Methods", "*");
  res.header("Access-control-Allow-Headers", "*");
  res.header("Access-control-Expose-Headers", "Authorization");
  next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlecoded({
        extended: true,
    }),
    cookieParser(),
    cors(),
)
app.get('^/$|/lifechoices', (req, res)=>{
    res.status(200).sendFile(path.json(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.use(port, ()=>{
    console.log(`server is running on port ${port}`);
})

