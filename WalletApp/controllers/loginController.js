import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const ACCESS_TOKEN = "b36d6185c3638eb5ea0b7ac017c36e3a4b5aef7eac566c491cad96b4cb3a25722ce4e1c09a338c23cadba5918e5eae629568dfe4a477c49008c1bc4d4c8ee0ce"


export default async function login(req, res) {

    const { user, password } = req.headers;

    if (user == null || password == null) {
        res.sendStatus(401)
        return
    }

    const usuario = await userModel.findOne({
        nombre: user
    })

    if (usuario == null) {
        res.sendStatus(401)
        return
    }

    const valido = await bcrypt.compare(password, usuario.contraseña)

    if (valido) {
        const token = jwt.sign(user, ACCESS_TOKEN)
        res.status(200).json({ token })
    } else {
        res.sendStatus(401)
    }

}