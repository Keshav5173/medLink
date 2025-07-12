import mongoose from "mongoose"

export const connection = mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to mongodb server");
}).catch((err)=>{
    console.log("mongodb connection error: ",err);
})