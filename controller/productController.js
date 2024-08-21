import { getProductsDB, getProductByIDDB, addProductDB, updateProdDB, deleteProductDB } from "../model/productDB.js";

const getProducts = async (req, res) => {
  try {
    res.status(200).json(await getProductsDB())
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving products")
  }
};

const getProductByID = async (req, res) => {
  try {
    res.status(200).json(await getProductByIDDB(req.params.id))
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving product")
  }
};

const addProduct = async (req, res) => {
    try {
        const { prodName, quantity, amount, Category, prodUrl } = req.body;
        await addProductDB(prodName, quantity, amount, Category, prodUrl);
        if (!res.headersSent) {
            res.status(201).send('Product added successfully');
        }
    } catch (error) {
        console.error('Error adding product:', error);
        if (!res.headersSent) {
            res.status(500).send('Error adding product');
        }
    }
}


const updateProd = async (req, res) => {
    try {
        let { prodName, quantity, amount, Category, prodUrl } = req.body;
        await updateProdDB(prodName, quantity, amount, Category, prodUrl, req.params.id);
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating product" });
    }
};

const deleteProduct = async (req, res) => {
  try {
    res.status(200).json(await deleteProductDB(req.params.id))
    res.send("Product deleted!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }
};

export { getProducts, getProductByID, addProduct, updateProd, deleteProduct };