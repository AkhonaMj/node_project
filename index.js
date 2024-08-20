import express from "express";
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

let port = process.env.PORT || 2020
const app = express()

app.use(express.json())
app.use("/users", userRouter)
app.use("/products", productRouter )
app.use(express.static("public"))



app.listen(port, () =>{
    console.log("http://localhost:"+port);
   
})