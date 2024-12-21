import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);

app.use(express.json());

app.get("/api/products", async (req,res) => {
    try {
        const products= await Product.find({});
        res.status(200).json({success:true, data:products});
    } catch (error) {
        console.error("Error in fetching product details:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }

});

app.post("/api/products", async (req,res) => {
    const product = req.body; //user will upload data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message:"Please upload all details"});
    }
    const newProduct= new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success:true , data:newProduct})
    } catch (error) {
        console.error("Error in creating Producr:", error.message);
        res.status(500).json({ success:false, message: "Server Error"});
    }
});

app.listen(4000, () =>  {
    connectDB();
    console.log("Server started at http://localhost:4000");
});