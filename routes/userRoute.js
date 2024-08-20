import express from "express";
import {getUsers, getUserById, updateUser} from "../controller/userController.js"

const router =  express.Router()

router.get("/users",getUsers)
router.get("/:id", getUserById)
router.patch("/update/:id", updateUser)



export default router