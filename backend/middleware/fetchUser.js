import { JWT_SEC } from "../config/config.js"
import jwt from "jsonwebtoken"


export const fetchUser=(req,res,next)=>{
    try {
        let token = req.header("auth-token")
        if(!token){
            return res.status(401).json("Please Login Using Valid Token")
        }
        let data=jwt.verify(token,JWT_SEC);
        req.user=data.user;
        next();
        
    } catch (error) {
        return res.status(500).json("Internal Server Error")   
    }
}

export const fetchAndAuthenticate=(req,res,next)=>{
    try {
        fetchUser(req,res,()=>{
            
             
            console.log(req.user.id)
            if(req.user.id==req.params.id){
                
                next()
            }
            else{
                return res.status(400).json("Not Valid")
            }
        })
        
    } catch (error) {
        return res.status(500).json("Internal Server Error")  
    }
}