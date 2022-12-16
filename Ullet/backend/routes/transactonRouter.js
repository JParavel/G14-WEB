import express from "express"
import { createTransaction, getTransactions } from "../controllers/transactionController.js"

const transactionRouter = express.Router()

transactionRouter.get("/:name", getTransactions)
transactionRouter.post("/", createTransaction)

export default transactionRouter