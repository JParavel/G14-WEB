import express from "express";
import { login } from "../modules/authModule.js";
import { verifyToken } from "../modules/tokenGenerator.js";
import userRouter from "./userRouter.js";

const apiRouter = express.Router();

//   /api

apiRouter.use("/user", userRouter);
apiRouter.get("/login", login);
apiRouter.get("/verify", verifyToken);

export default apiRouter;
