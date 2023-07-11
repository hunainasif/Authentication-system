import User from "../models/users.model.js"
import bcrypt from "bcryptjs"

// updateUser
export const updateUser=async(req,res,next)=>{
    try {
        if(req.body.password){
            let salt =await bcrypt.genSalt(10)
            let hash=await bcrypt.hash(req.body.password,salt)
            req.body.password=hash;
        }
        let user=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})

        return res.status(200).json({user})

        
    } catch (error) {
        return res.status(500).json("Internal Server Error") 
    }
}

// deleteUser

export const deleteUser=async(req,res,next)=>{
    try {
         let user=await User.findByIdAndDelete(req.params.id)
        return  res.status(200).json({user})
    } catch (error) {
        return res.status(500).json("Internal Server Error")
        
    }
}