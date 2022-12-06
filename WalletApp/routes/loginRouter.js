import express from "express"
import login from "../controllers/loginController.js"

const loginRouter = express.Router()

loginRouter.get("/", login)


export default loginRouter