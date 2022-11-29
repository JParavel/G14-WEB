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
userRouter.get("/", (req, res) =>{
    readUser(req, res)
})
//Actualizar
//PUT
userRouter.put("/", (req, res) =>{
    updateUser(req, res)
})
//Eliminar
//DELETE
userRouter.delete("/", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter;
