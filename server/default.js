import { products } from "./constants/data.js";
import Product from "./models/products-schema.js";

const DefaultData=async ()=>{
    try {
        await Product.insertMany(products);
        console.log("products inserted in database successfully");
    } catch (error) {
        console.log("error while inserting data: " ,error.message);
    }
};

export default DefaultData;