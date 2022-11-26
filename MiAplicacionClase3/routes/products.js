import express from "express"

const router = express.Router();

// ./products

router.get("/", function (req, res){
    res.status(404)
    res.end()
    // res.send("Bienvenido a la página de productos.")
})

router.get("/new", function (req, res){
    res.send("Creando un nuevo producto")
})

export default router;