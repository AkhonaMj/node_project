import express from "express";
import cors from "cors"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

let port = process.env.PORT || 2020
const app = express()

app.use(express.json())
app.use(cors({
    origin:"http://localhost:8082",
    credentials:true
}))
app.use("/users", userRouter)
app.use("/products", productRouter )
app.use(express.static("public"))



app.listen(port, () =>{
    console.log("http://localhost:"+port);
   
})