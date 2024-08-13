import express from "express"
import {updateMany} from "./models/movies.js";

import { connectDB } from "./db/connection.js";

const app=express();


const port=process.env.PORT||4000;
const DATABASE_URL=
process.env.DATABASE_URL||'mongodb+srv://jahanashrn411:jahana%232001@cluster0.9ktuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
connectDB();
updateMany();
app.listen(port,()=>console.log(`server listening on port ${port}`));  