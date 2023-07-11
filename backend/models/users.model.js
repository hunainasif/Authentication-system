import mongoose from "mongoose";
const {Schema}= mongoose;


const UserScehma=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model("User",UserScehma)

export default User;