import {pool} from "../config/config.js"

const getUsersDB = async () =>{
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users")
    return results
}
const getUserByIdDB = async (id) => {
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users WHERE userID=?", [id])
    return results
    
}

export {getUsersDB, getUserByIdDB}