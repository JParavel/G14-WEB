//Importamos las dependencias
import dotenv from "dotenv"
import express from "express"
import mongoose, { mongo } from "mongoose"

import apiRouter from "./routes/apiRouter.js"

//Esta linea de código habilita el uso de variables de entorno en la aplicación
dotenv.config()


const app = express()
const port = process.env.PORT || 8080

//El servidor inicia en el puerto asignado
app.listen(port, () => {
    console.log("Server is running on port " + port);
})

const uri = process.env.URI

mongoose.set("strictQuery", true)
// @ts-ignore
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database is now connected");
    }
})

//Middlewares
app.use(express.json()) //Este middleware ayuda a que express entienda JSON
app.use("/api", apiRouter)
app.use("/", (req, res) => res.json("Bienvenido a UlletAPI!"))


