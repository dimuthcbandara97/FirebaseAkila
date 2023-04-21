import express from  "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import locationRouter from "./routes/LocationRoute.js";


const app = express()
const env =dotenv.config();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',locationRouter);

const port = process.env['PORT'] || 3000
app.listen(port)
