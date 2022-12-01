import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "name":{type:String, required:true},
    "age":Number,
})

export default mongoose.model("users", userModel)