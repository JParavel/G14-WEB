import express from "express";

const app = express()
const puerto = 3000

app.listen(3000, () => {
    console.log("El servidor está ejecutandose");
})

// //Declaramos una funcion
// function callback(){
//     console.log("El servidor está ejecutandose");
// }

// //Funcion flecha

// () => {
//     console.log("El servidor está ejecutandose");
// }

const usuario = {
    nombre: "Juan Carlos",
    correo: "juan.perez1@o365.unab.edu.co",
    edad: 99,
    "comidas favoritas":[
        "chocolate",
        "arequipe",
        "fresas"
    ],
    mascota:{
        nombre:"Calvin",
        edad: 7,
        raza: "PitBull"
    }
}


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

