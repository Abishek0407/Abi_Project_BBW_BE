const mongoose =require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI).then((req,res)=>{
    console.log("mongoose is working");
    
}).catch((err)=>{
    console.log("the error is:",err);
    
})
module.exports=mongoose