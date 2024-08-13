import mongoose from "mongoose";

//define schema

const movieSchema =new mongoose.Schema({
    name:{type:String,
        required:true,
        trim:true},
    ratings:{type:Number,
        required:true,
        trim:true},
    money:{
        type:mongoose.Decimal128,
        required:true,
        validate:(v)=>v>=10,

    },
    genre:{type:Array},
    isActive:{type:Boolean},
    coments:[{value:{type:String},published:{type:Date,default:Date.now}}],
    
})


//creating model
const movieModel =mongoose.model("movies",movieSchema);


//const singleDoc=async()=>{
    //try{
        //creating new doc
        // const m1=new movieModel({
        //     name:"extraction 2",
        //     ratings:4,
        //     money:60000,
        //     genre:["action","adventure"],
        //     isActive:true,
        //     comments:[{value:"That was an amaz*ing movie"}],
        // });
        // const m2=new movieModel({
        //     name:"extraction 3",
        //     ratings:5,
        //     money:80000,
        //     genre:["action","adventure"],
        //     isActive:true,
        //     comments:[{value:"not good"}],
        // });
        // const m3=new movieModel({
        //     name:"extraction 4",
        //     ratings:6,
        //     money:60000,
        //     genre:["action","adventure"],
        //     isActive:true,
        //     comments:[{value:"not good"}],
        // });
        // const m4=new movieModel({
        //     name:"extraction 5",
        //     ratings:7,
        //     money:40000,
        //     genre:["action","adventure"],
        //     isActive:true,
        //     comments:[{value:"good"}],
        // });
        //const result=await movieModel.find({money:{$gt:6000}});
           // console.log(result);
        //iterating over 
        //result.forEach((movie)=>{
           //console.log(movie.money))};
    //}
    const updateMany=async()=>{
        try{
            const result=await movieModel.deleteOne({isActive:true})
            console.log(result);
        }
    
    catch(error){
        console.log(error)
    }
};
export  {updateMany};