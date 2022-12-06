import express from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js";
import validateToken from "../Middlewares/validateToken.js";

const userRouter = express.Router()

//Crear
//POST
userRouter.post("/", (req, res) => {
    createUser(req, res)
})
//Leer
//GET
userRouter.get("/", validateToken, (req, res) => {
    readUser(req, res)
})
//Actualizar
//PUT
userRouter.patch("/:nombre", (req, res) => {
    updateUser(req, res)
})
//Eliminar
//DELETE
userRouter.delete("/:id", (req, res) => {
    deleteUser(req, res)
})

export default userRouter;
