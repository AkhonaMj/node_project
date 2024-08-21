import express from "express";
import {getUsers, getUserById, updateUser, deleteUser, registerUser} from "../controller/userController.js"

const router =  express.Router()

router.get("/users",getUsers)
router.get("/:id", getUserById)
router.patch("/update/:id", updateUser)
router.delete("/delete/:id", deleteUser)
router.post("/register", registerUser)



export default router