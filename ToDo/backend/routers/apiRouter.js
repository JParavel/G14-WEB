//Importamos express y las otras rutas de acceso
import express from "express";
import { login, register } from "../modules/authModule.js";
import todoRouter from "./todoRouter.js";

const apiRouter = express.Router();

apiRouter.use("/todo", validateToken, todoRouter); //http://localhost/api/todo
apiRouter.get("/login", login); //http://localhost/api/login
apiRouter.post("/register", register); //http://localhost/api/register

export default apiRouter;
