import express from "express"
import {  fetchUser } from "../middleware/fetchUser.js";
import { createNotes, deleteNotes, getAllNotes, getNote, updateNotes } from "../controllers/notes.controller.js";
const router=express.Router()

// createNotes
router.post("/createNotes",fetchUser,createNotes)
// updateNotes
router.put("/updateNotes/:id",fetchUser,updateNotes)
// deleteNotes
router.delete("/deleteNotes/:id",fetchUser,deleteNotes)
// getNote
router.get("/getNote/:id",fetchUser,getNote)

// getAllNotes
router.get('/getAllNotes',fetchUser,getAllNotes)

export default router;