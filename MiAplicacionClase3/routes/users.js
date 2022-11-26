import express from "express"

const router = express.Router()

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

// ./users/new

router.get("/", function (req, res){
    res.json(usuario)
})

router.get("/new", (req, res) => {
    res.send("Estas creando un nuevo usuario.")
})

router.get("/:id", (req, res) => {

    const userID = req.params.id

    res.send("La id solicitada es: "+userID)
})



export default router




