import express from "express"
import { getProducts, getProductByID, addProduct } from "../controller/productController.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProductByID)
router.post("/addProduct", addProduct)

export default router