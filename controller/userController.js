import {getUsersDB} from "../model/userDB.js"

const getUsers = async (req, res) => {
    res.send(await getUsersDB())
}

export{
    getUsers
}