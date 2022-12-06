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
    "id": { type: String, default: () => genKey(10), set: () => genKey(10), immutable: true },
    "nombre": { type: String, required: true, maxlength: 30, minlength: 3, unique: true, immutable: true },
    "edad": { type: Number, required: true, min: 18, max: 99 },
    "ciudad": { type: String, required: true, enum: ciudades },
    // "date": { type: Date, default: Date.now },
    "activo": Boolean,
    "contraseña": { type: String, required: true }
    // "perfil": profileSchema
}, { timestamps: true })

export default mongoose.model("users", userSchema)