import {compare} from "bcrypt"
import { getUserByIdDB } from "../model/userDB.js"
import jwt from "jsonwebtoken" 
import {config} from "dotenv"
config()

const checkUser = async (req, res, next) => {
    const {userProfile, password} = req.body
    let hashedPassword = (await getUserByIdDB(userProfile))

    compare(password, hashedPassword, (err, result)=>{
        if(result==true){
            let token = jwt.sign({userProfile:userProfile},process.env.SECRET_KEY,{expiresIn: "1h"})
            console.log(token)
            req.body.token = token

            next()
            return
        }
        res.send("Wrong password")
    })
 
}

export {checkUser}