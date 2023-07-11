import {body,validationResult} from "express-validator"
import User from "../models/users.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { JWT_SEC } from "../config/config.js"

// createUser
export const createUser=async(req,res,next)=>{
    try {
       await body("name","name must be atleast 3 characters").isLength({min:3}).run(req)
       await body("email","please enter a valid email").isEmail().run(req),
       await body("name","password must be atleast 5 characters").isLength({min:5}).run(req)
        
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(401).json("User with this email already exists")
        }
        let salt=await bcrypt.genSalt(10)
        let hash=await bcrypt.hash(req.body.password,salt)
        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hash
        })

        const data={
            user:{
                id:user.id
            }
        }
        let token=await jwt.sign(data,JWT_SEC);

        return res.status(200).json({token})
    } catch (error) {
        return res.status(500).json("Internal Server Error")
        
    }
}

// loginUser

export const loginUser=async(req,res,next)=>{
    try {
        await body("email","Please Enter a Valid Email").isEmail().run(req),
        await body("password","Password Must be atleast 5 characters").exists().run(req)

        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        let {email,password}=req.body
        let user=await User.findOne({email})
        if(!user){
            return  res.status(401).json("Please Try using correct credentials")
        }
        let passwordCompare=await bcrypt.compare(password,user.password)

        if(!passwordCompare){
            return res.status(401).json("Please try using correct credentials")
        }

        const data={
            user:{
                id:user.id
            }
        }
        const token=jwt.sign(data,JWT_SEC)
        return res.status(200).json({token})
        
    } catch (error) {
        return res.status(500).json("Internal Server Error")      
    }
}