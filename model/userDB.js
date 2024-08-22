import { pool } from "../config/config.js"

const registerUserDB = async (firstName, lastName, userAge, gender, userRole, emailAdd, userProfile, hashedP) => {
    try {
        await pool.query("INSERT INTO bntypjaquqwm92oofyxl.users(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile) VALUES(?,?,?,?,?,?,?,?)", 
            [firstName, lastName, userAge, gender, userRole, emailAdd, userProfile, hashedP]);
    } catch (error) {
        console.error("Error registering user:", error);
        throw { status: 500, message: "Internal Server Error" };
    }
}
const getUsersDB = async () => {
    try {
        let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users");
        return results;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw { status: 500, message: "Internal Server Error" };
    }
}

const getUserByIdDB = async (id) => {
    try {
        let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users WHERE userID=?", [id]);
        if (results.length === 0) {
            throw { status: 404, message: "User Not Found" };
        }
        return results;
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}

const updateUserDB = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id) => {
    try {
        let [result] = await pool.query("UPDATE bntypjaquqwm92oofyxl.users SET firstName=?, lastName=?, userAge=?, Gender=?,userRole=?, emailAdd=?, userPass=?, userProfile=? WHERE userID=?", 
            [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id]);
        if (result.affectedRows === 0) {
            throw { status: 404, message: "User Not Found" };
        }
    } catch (error) {
        console.error("Error updating user:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}

const deleteUserDB = async (id) => {
    try {
        let [result] = await pool.query("DELETE FROM bntypjaquqwm92oofyxl.users WHERE userID=?", [id]);
        if (result.affectedRows === 0) {
            throw { status: 404, message: "User Not Found" };
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}

const getUserByEmailDB = async (emailAdd) => {
    try {
        let [[{userPass}]] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.users WHERE emailAdd=?", [emailAdd]);
        if (userPass.length === 0) {
            throw { status: 404, message: "User Not Found" };
        }
        return userPass;
    } catch (error) {
        console.error("Error retrieving user by Email:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}

export { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, registerUserDB, getUserByEmailDB}
