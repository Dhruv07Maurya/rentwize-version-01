import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./db/index.js";
import authRouter from "./routes/authRoute.js";
dotenv.config();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/auth',authRouter);

connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})