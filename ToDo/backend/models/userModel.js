//Importamos mongoose
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("users", userSchema);
