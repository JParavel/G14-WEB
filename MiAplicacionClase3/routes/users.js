import express from "express"

const router = express.Router()



// ./users/new
const usuarios = []

router.get("/", function (req, res){
    res.json(usuarios)
})

router.post("/new", (req, res) => {

    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const edad = req.body.edad;
    const id = Math.random().toString(36).slice(2)

    const usuario = {
        nombre: nombre,
        correo: correo,
        edad: edad,
        id:id
    }

    usuarios.push(usuario)
    res.json(usuario)
    
})

router.get("/:args", (req, res) => {

    let args = req.params.args;
    args = args.split(";")
    res.json(args[4])
})



export default router




