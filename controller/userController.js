import {getUsersDB, getUserByIdDB, updateUserDB} from "../model/userDB.js"

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
// comment
export{getUsers,getUserById,updateUser}