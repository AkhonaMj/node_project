import express from "express"
import { getProducts, getProductByID, addProduct, updateProd } from "../controller/productController.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProductByID)
router.post("/addProduct", addProduct)
router.patch("/update/:id",updateProd )

export default router