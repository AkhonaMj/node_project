import express from "express";
import {getUsers, getUserById, updateUser, deleteUser, registerUser, loginUser} from "../controller/userController.js"
import {checkUser} from "../middleware/authenticate.js"

const router =  express.Router()

router.get("/",getUsers)
router.get("/:id", getUserById)
router.patch("/update/:id", updateUser)
router.delete("/delete/:id", deleteUser)
router.post("/register", registerUser)
router.post("/signIn", checkUser, loginUser)



export default router