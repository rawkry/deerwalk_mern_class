import  mongoose  from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import Order from "./models/orderModel.js"
import User from "./models/userModel.js";
import Product from "./models/ProductModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importdata =async()=>{
try{
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProduct = products.map((product)=>{
        return{...product,user:adminUser}
    });

    await Product.insertMany(sampleProduct);
 
    console.log("Data imported!!!!!");


}catch(err){
    console.error(err);
    process.exit();

}
}

importdata();