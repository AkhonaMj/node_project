import express from "express"
import { getProducts, getProductByID, addProduct, updateProd, deleteProduct } from "../controller/productController.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProductByID)
router.post("/addProduct", addProduct)
router.patch("/update/:id",updateProd )
router.delete("/delete/:id", deleteProduct)

export default router