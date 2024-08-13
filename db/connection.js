import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDB= async()=>{
 
      await mongoose.connect(process.env.DATABASE_URL,{dbname:"movie"});
       console.log("database connected");
      await mongoose.connect("mongodb+srv://jahanashrn411:jahanashirin@project1.9ktuc.mongodb.net/?retryWrites=true&w=majority&appName=project1").then(() => {
        console.log("connected");
      }).catch((err) => {
        console.log(err);
      });

  
};

