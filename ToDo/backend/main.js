//Importar depencias
import dotev from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import apiRouter from "./routers/apiRouter.js";

//Decirle a cors que será el manejador de variables de entorno
dotev.config();

const port = process.env.PORT;
const uri = process.env.URI;
const app = express();

//Iniciamos la ejecución del servidor backend
app.listen(port, () => {
  console.log("El servidor se está ejecutando en el puerto " + port);
});

//Iniciar la conexion con la base de datos
mongoose.set("strictQuery", false);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("La base de datos se encuentra conectada");
  }
});

//Configuraciones de la API (Middlewares)
//Para entender formato json
app.use(express.json());
//Para darle acceso al front
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
//Establecer las rutas
app.use("/api", apiRouter);

//Pagina de presentación de la API
app.get("/", (req, res) => {
  res.send("Bienvenido a la api de ToDo 🖋️");
});
