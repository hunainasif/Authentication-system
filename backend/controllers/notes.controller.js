import { body, validationResult } from "express-validator"
import Notes from "../models/notes.model.js"


// createNotes
export const createNotes=async(req,res,next)=>{
    try {
        await body("title","title must be atleast 3 character long").isLength({min:3}).run(req),
        await body("description","description must be atleast 5 characters long").isLength({min:5}).run(req)
        let errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        let note= new Notes({
            user:req.user.id,
            title:req.body.title,
            description:req.body.description,
            tag:req.body.tag
        })
        let savedNote=await note.save()

        return res.status(200).json({savedNote})


        
    } catch (error) {
        return res.status(500).json("Internal Server Error")
        
    }
}

// updateNotes

export const updateNotes=async(req,res,next)=>{
    try {

    let note=await Notes.findById(req.params.id)
     if(note.user.toString()!==req.user.id){
       return res.status(400).json("Not Allowed")
     }
     
        let updatedNote=await Notes.findByIdAndUpdate(req.params.id)

        return res.status(200).json({updatedNote})
        
    } catch (error) {
        return res.status(500).json("Internal Server Error")    
    }
}
// deleteNotes
export const deleteNotes=async(req,res,next)=>{
    try {
        let note=await Notes.findById(req.params.id)
        if(note.user.toString()!==req.user.id){
          return res.status(400).json("Not Allowed")
        }
        let deletedNote=await Notes.findByIdAndDelete(req.params.id);

        return res.status(200).json({deletedNote})
        
    } catch (error) {
        return res.status(500).json("Internal Server Error")    
    }

}
// getNote
export const getNote=async(req,res,next)=>{
    try {
        let note=await Notes.findById(req.params.id)
        if(note.user.toString()!==req.user.id){
          return res.status(400).json("Not Allowed")
        }
         note=await Notes.findById(req.params.id)
        return res.status(200).json({note})
        
    } catch (error) {
        return res.status(500).json("Internal Server Error")
        
    }
}
// getAllNotes

export const getAllNotes=async(req,res,next)=>{
    try {
        let notes =await Notes.find({user:req.user.id});
        return res.status(200).json({notes})
        
    } catch (error) {
        return res.status(200).json("Internal Server Error")
        
    }
}