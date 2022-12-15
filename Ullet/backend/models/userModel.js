import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "name": { type: String, required: true, minlength: 3, maxlength: 20, unique: true },
    "password": { type: String, required: true },
})

export default mongoose.model("users", userSchema)