import express from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router()

//Crear
//POST
userRouter.post("/", (req, res) =>{
    createUser(req, res)
})
//Leer
//GET
userRouter.get("/:nombre/:ciudad", (req, res) =>{
    readUser(req, res)
})
//Actualizar
//PUT
userRouter.patch("/:id", (req, res) =>{
    updateUser(req, res)
})
//Eliminar
//DELETE
userRouter.delete("/:id", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter;
