import express from "express";
import {getUsers, getUserById} from "../controller/userController.js"

const router =  express.Router()

router.get("/users",getUsers)
router.get("/:id", getUserById)



export default router