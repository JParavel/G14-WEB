import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import validatePassword from "../middlewares/validatePassword.js";

const userRouter = express.Router();

userRouter.post("/", validatePassword, createUser);
userRouter.get("/", getUser);
userRouter.patch("/", updateUser);
userRouter.delete("/", deleteUser);

export default userRouter;
