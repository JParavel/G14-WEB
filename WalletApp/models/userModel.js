import mongoose from "mongoose";
import genKey from "../utils/keyGenerator.js";

const profileSchema = new mongoose.Schema({
    "mensaje": String,
    "estado": String
})

const ciudades = ["Barranquilla", "Bogotá", "Medellin", "Cali", "Bucaramanga"]

function validacionPar(v) {
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const userSchema = new mongoose.Schema({
    "nombre": { type: String, required: true, maxlength: 30, minlength: 3, unique: true, immutable: true },
    "contraseña": { type: String, required: true }
    // "perfil": profileSchema
}, { timestamps: true })

export default mongoose.model("users", userSchema)