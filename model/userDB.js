import {pool} from "../config/config.js"

const getUsersDB = async () =>{
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users")
    return results
}

export {getUsersDB}