import mongoose from "mongoose";

// const profileSchema = mongoose.Schema({
//     "mensaje": String,
//     "estado" : String
// })

const userSchema = mongoose.Schema({
    "nombre": {type:String, required: true},
    "edad": {type:Number, required: true},
    "ciudad": String,
    "date":{type:Date, default:Date.now()}
    // "perfil": profileSchema
})

export default mongoose.model("users", userSchema)