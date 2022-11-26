import express from "express";
import routerUsers from "./routes/users.js";
import routerProducts from "./routes/products.js";

const app = express()
const puerto = 3000

app.listen(3000, () => {
    console.log("El servidor está ejecutandose");
})

app.use(express.json())
app.use("/users", routerUsers)
app.use("/products", routerProducts)

// //Declaramos una funcion
// function callback(){
//     console.log("El servidor está ejecutandose");
// }

// //Funcion flecha

// () => {
//     console.log("El servidor está ejecutandose");
// }


app.get("/", (req, res) => {
    res.json(usuario)
})

app.get("/inicio", (req, res) => {
    res.redirect("/")
})

app.get("/inicio/G14", (req, res) => {
    res.send("Bienvenido a la página del grupo G14")
})


//Github.com/

