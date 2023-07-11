import express from "express"
import { createUser, loginUser } from "../controllers/auth.controller.js"
const router=express.Router()



// createUser
router.post('/createUser',createUser)
// loginUser
router.post('/loginUser',loginUser)


export default router;