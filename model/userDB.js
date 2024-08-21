import {pool} from "../config/config.js"

const registerUserDB = async (firstName, lastName, userAge, Gender,userRole, emailAdd, userProfile,hashedP) => {
    await pool.query("INSERT INTO bntypjaquqwm92oofyxl.users(firstName, lastName, userAge, Gender,userRole, emailAdd, userPass, userProfile) VALUES(?,?,?,?,?,?,?,?)", [firstName, lastName, userAge, Gender,userRole, emailAdd, userProfile, hashedP])
    
}

const getUsersDB = async () =>{
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users")
    return results
}
const getUserByIdDB = async (id) => {
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users WHERE userID=?", [id])
    return results
    
}
const updateUserDB = async (firstName, lastName, userAge, Gender,userRole, emailAdd, userPass, userProfile) => {
    await pool.query("UPDATE bntypjaquqwm92oofyxl.users SET firstName=?, lastName=?, userAge=?, Gender=?,userRole=?, emailAdd=?, userPass=?, userProfile=?", [firstName, lastName, userAge, Gender,userRole, emailAdd, userPass, userProfile])
}
const deleteUserDB = async (id) => {
    let [results] = await pool.query("DELETE FROM bntypjaquqwm92oofyxl.users WHERE userID=?", [id])
    return results
    
}

export {getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, registerUserDB}