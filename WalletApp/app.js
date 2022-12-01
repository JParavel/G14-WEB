import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

const app = express()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("El servidor está ejecutandose correctamente.");
})
mongoose.connect("mongodb+srv://walletapp:walletapp@clusterwalletapp.ryjayfo.mongodb.net/wallet-app?retryWrites=true&w=majority", (err)=>{
    if (err) {
        console.log(err);
    } else{
        console.log("Se ha conectado a la base de datos.");
    }
})

app.use(express.json())
app.use("/user", userRouter)