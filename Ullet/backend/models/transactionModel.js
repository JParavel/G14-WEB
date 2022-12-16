import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    value: { type: Number, required: true },
}, { timestamps: true })

export default mongoose.model("transactons", transactionSchema)