import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";

const connecToDb=async()=>{
    try {
      await mongoose.connect(MONGO_URL)  
      console.log("DataBase Connected")  
      return ;
    } catch (error) {
        console.log("Error in Server")
        return;
    }
}

export default connecToDb;