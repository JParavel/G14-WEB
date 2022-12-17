import express from "express";
import { login } from "../modules/authModule.js";
import transactionRouter from "./transactonRouter.js";
import userRouter from "./userRouter.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/transaction", transactionRouter);
apiRouter.get("/login", login);

export default apiRouter;
