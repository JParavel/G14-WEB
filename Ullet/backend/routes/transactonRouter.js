import express from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController.js";
import { validateToken } from "../modules/tokenGenerator.js";

const transactionRouter = express.Router();

transactionRouter.get("/", validateToken, getTransactions);
transactionRouter.post("/", createTransaction);

export default transactionRouter;
