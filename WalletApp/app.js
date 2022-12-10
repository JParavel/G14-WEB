import cors from "cors"
import express from "express"
import mongoose from "mongoose";
import mwPrueba from "./Middlewares/mwPrueba.js";
import loginRouter from "./routes/loginRouter.js";
import testRouter from "./routes/testRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express()

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El servidor está ejecutandose correctamente.");
})
mongoose.connect("mongodb+srv://walletapp:walletapp@clusterwalletapp.ryjayfo.mongodb.net/wallet-app?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Se ha conectado a la base de datos.");
    }
})

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())
app.use(mwPrueba)
app.use("/user", userRouter)
app.use("/login", loginRouter)
app.use("/test", testRouter)