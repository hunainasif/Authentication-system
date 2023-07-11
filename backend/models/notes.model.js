import mongoose from "mongoose";

const {Schema} =mongoose

const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     
    tag:{
        type:String,
        default:"general"
    }

},{timestamps:true})

const Notes=mongoose.model("Notes",NotesSchema)

export default Notes;