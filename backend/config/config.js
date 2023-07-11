import dotenv from "dotenv"
dotenv.config()


export const PORT=process.env.PORT
export const MONGO_URL=process.env.MONGO_URL
export const JWT_SEC=process.env.JWT_SEC