import express from "express";
import dotenv from "dotenv";
import connectDB from "./server/config/db.js"
import bodyParser from "body-parser";
import userRouter from "./routes/user.router.js"
dotenv.config();
const app = express();

app.use(bodyParser.json())

//connect to database
connectDB();

app.use('/', userRouter)

export default app;