import express from "express"
import { deleteUser, updateUser } from "../controllers/users.controller.js";
import { fetchAndAuthenticate } from "../middleware/fetchUser.js";
const router=express.Router()

// updateUser
router.put("/updateUser/:id",fetchAndAuthenticate,updateUser)

// deleteUser
router.delete("/deleteUser/:id",fetchAndAuthenticate,deleteUser)

export default router;