import { getUsersDB, getUserByIdDB, updateUserDB, deleteUserDB, registerUserDB } from "../model/userDB.js"
import { hash } from "bcrypt"

const registerUser = async (req, res) => {
  try {
    let { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body
    const hashedP = await hash(userPass, 10)
    await registerUserDB(firstName, lastName, userAge, gender, userRole, emailAdd,  hashedP, userProfile)
    res.status(201).send("User Added!")
  } catch (err) {
    console.error(err)
    res.status(500).send("Error registering user")
  }
}

const loginUser = async (req, res) => {
  try {
    res.json({
      message: "Login Successful",
      token: req.body.token
    })
  } catch (err) {
    console.error(err)
    res.status(401).send("Invalid login credentials")
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await getUsersDB()
    res.status(200).send(users)
  } catch (err) {
    console.error(err)
    res.status(500).send("Error fetching users")
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await getUserByIdDB(req.params.id)
    if (!user) {
      res.status(404).send("User not found")
    } else {
      res.status(200).send(user)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send("Error fetching user")
  }
}

const updateUser = async (req, res) => {
  try {
    let { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body
    await updateUserDB(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile,req.params.id)
    res.status(200).send("User updated successfully")
  } catch (err) {
    console.error(err)
    res.status(500).send("Error updating user")
  }
}

const deleteUser = async (req, res) => {
  try {
    await deleteUserDB(req.params.id)
    res.status(200).send("User deleted successfully")
  } catch (err) {
    console.error(err)
    res.status(500).send("Error deleting user")
  }
}



export { getUsers, getUserById, updateUser, deleteUser, registerUser, loginUser }