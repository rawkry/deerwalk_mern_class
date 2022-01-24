//Database connection code
//mongo
//common JS



import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL,{});
        console.log("connected");

    } catch (err){
        console.log("failed");
        process.exit(1);

    }
};

export default connectDB;