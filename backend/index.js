import express from "express"
import { PORT } from "./config/config.js"
const app=express()
import cors from "cors"
import connecToDb from "./utils/db.js"
connecToDb()

import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/users.route.js"
import notesRoute from "./routes/notes.route.js"

app.use(express.json())
app.use(cors())


app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/notes",notesRoute)


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})




