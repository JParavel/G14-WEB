//Importar dependencias
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import transactionRouter from "./routers/transactionRouter.js";

//dotenv como manejador de variables de entorno
dotenv.config();

//declaramos las variables
const port = process.env.PORT || 8081;
const uri = process.env.URI;
const app = express();

//Iniciar la ejecución del servicio
app.listen(port, () => {
  console.log("El servidor está escuchando en el puerto: " + port);
});

//Iniciar la conexion con mongodb
mongoose.set("strictQuery", true);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("La base de datos está conectada.");
  }
});

//Configuraciones y Middlewares
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use(express.json());

//Definir las rutas de acceso
app.use("/", transactionRouter);
