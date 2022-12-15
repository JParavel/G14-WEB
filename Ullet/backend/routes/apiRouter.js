import express from "express"
import userRouter from "./userRouter.js"

const apiRouter = express.Router()

apiRouter.use("/user", userRouter)

export default apiRouter