import {compare} from "bcrypt"
import { getUserByEmailDB } from "../model/userDB.js"
import jwt from "jsonwebtoken" 
import {config} from "dotenv"
config()

const checkUser = async (req, res, next) => {
    const {emailAdd, userPass} = req.body //destructuring
    console.log(emailAdd, userPass);
    
    let hashedPassword = (await getUserByEmailDB(emailAdd))
console.log(hashedPassword);

    compare(userPass, hashedPassword, (err, result)=>{
        if(result==true){
            let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn: "1h"})
            console.log(token)
            req.body.token = token

            next()
            return
        }
        res.send("Wrong password")
    })
 
}

export {checkUser}