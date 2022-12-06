import express from "express"
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

const testRouter = express.Router()

testRouter.get("/", async (req, res) => {

    const { usuario, contraseña } = req.body;

    const user = await userModel.findOne({
        "nombre": usuario
    })

    if (user == null) {
        res.sendStatus(401)
        return
    }

    const valido = await bcrypt.compare(contraseña, user.contraseña)

    if (valido) {
        res.json(valido)
    } else {
        res.sendStatus(401)
    }

})


export default testRouter