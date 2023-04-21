import express from  "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import locationRouter from "./routes/LocationRoute.js";


const app = express()
const env =dotenv.config();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/location',locationRouter);

const port = process.env['PORT'] || 8080
app.listen(port)
