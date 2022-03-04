import express from "express";
import Product from "../models/ProductModel.js";
import catchAsync from "express-async-handler";

const router = express.Router();

router.get("/",catchAsync(async(req,res)=>{
    const products=await Product.find({})
       res.json(products);
   })
);
   router.get(
    "/:id",
  
    catchAsync(async (req, res) => {
      // const product = products.find((p) => p._id === req.params.id);
  
      let product = await Product.findById(req.params.id);
  
      if (!product) {
        // This the case where product was not found in database
        // return res.status(404).json({ message: "Product not Found" }); - Old Code for Ref
        res.status(404);
        throw new Error("Product Not Found");
      }
  
      return res.json(product);
    })
  );

   export default router;
   