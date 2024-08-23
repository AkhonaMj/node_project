import express from "express";
import cors from "cors"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

let port = process.env.PORT || 2020
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});
app.use(cors())
  
app.use("/users", userRouter)
app.use("/products", productRouter )



app.listen(port, () =>{
    console.log("http://localhost:"+port);
   
})