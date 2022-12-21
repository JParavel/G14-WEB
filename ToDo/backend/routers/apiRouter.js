//Importamos express y las otras rutas de acceso
import express from "express";
import { login, register } from "../modules/authModule.js";

const apiRouter = express.Router();

apiRouter.get("/login", login); //http://localhost/api/login
apiRouter.post("/register", register); //http://localhost/api/register

export default apiRouter;
