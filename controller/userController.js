import {getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, registerUserDB} from "../model/userDB.js"
import {hash} from "bcrypt"

const registerUser = async (req, res) =>{
    let{firstName, lastName, userAge, Gender,userRole, emailAdd, userPass, userProfile} = req.body
    hash(userPass, 10, async (err, hashedP)=>{
        if(err)console.log(err)
            console.log(hashedP)
        await registerUserDB(firstName, lastName, userAge, Gender,userRole, emailAdd, userProfile, hashedP)
    })
    res.send("User Added!")

}

const getUsers = async (req, res) => {
    res.send(await getUsersDB())
}
const getUserById = async(req, res) =>{
    res.send(await getUserByIdDB(req.params.id))

}
const  updateUser = async (req, res) => {
    let {firstName, lastName, userAge, Gender,userRole, emailAdd, userPass, userProfile} = req.body
    res.send(await updateUserDB(firstName, lastName, userAge, Gender,userRole, emailAdd, userPass, userProfile))
}
const deleteUser = async (req, res) =>{
    await deleteUserDB(req.params.id)
    res.send(await deleteUserDB())

}
// comment
export{getUsers,getUserById,updateUser, deleteUser, registerUser}