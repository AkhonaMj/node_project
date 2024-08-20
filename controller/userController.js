import {getUsersDB, getUserByIdDB} from "../model/userDB.js"

const getUsers = async (req, res) => {
    res.send(await getUsersDB())
}
const getUserById = async(req, res) =>{
    res.send(await getUserByIdDB(req.params.id))

}

export{
    getUsers,
    getUserById
}