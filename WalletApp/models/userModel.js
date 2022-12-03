import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    "mensaje": String,
    "estado": String
})

const ciudades = ["Barranquilla", "Bogotá", "Medellin", "Cali", "Bucaramanga"]

function validacionPar(v){
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const userSchema = mongoose.Schema({
    "nombre": {type:String, required:true,  maxlength: 30, minlength: 3},
    "edad": {
        type: Number, 
        min: 18, 
        max: 199, 
        required:true,
        // validate:{
        //     validator: validacionPar,
        //     // message: props => `${props.value} tiene que ser un numero par`
        //     message: "El numero tiene que ser par"
        // }
    },
    "ciudad": { type: String, required:true, enum: ciudades },
    "date": Date,
    "activo": Boolean,
    // "perfil": profileSchema
})

export default mongoose.model("users", userSchema)