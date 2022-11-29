import express from "express"
import { createUser, readUser } from "../controllers/userController.js"

const router = express.Router()

// ./users/new
const usuarios = []

router.get("/", function (req, res){
    res.json(usuarios)
})

router.post("/new", (req, res) => {
    createUser(req, res)
})

router.get("/:nombre", (req, res) => {
    readUser(req, res)
})



export default router




