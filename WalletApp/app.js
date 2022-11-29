import express from "express"
import userRouter from "./routes/userRouter.js";

const app = express()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("El servidor está ejecutandose correctamente.");
})

app.use(express.json())
app.use("/user", userRouter)