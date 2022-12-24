import express from "express";
import { createUser } from "../controllers/userController.js";
import validatePassword from "../middlewares/validatePassword.js";

const userRouter = express.Router();

userRouter.post("/", validatePassword, createUser);

export default userRouter;
