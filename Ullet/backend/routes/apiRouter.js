import express from "express"
import transactionRouter from "./transactonRouter.js"
import userRouter from "./userRouter.js"

const apiRouter = express.Router()

apiRouter.use("/user", userRouter)
apiRouter.use("/transaction", transactionRouter)

export default apiRouter