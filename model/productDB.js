import { pool } from "../config/config.js";

const getProductsDB = async () => {
    try {
        let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products");
        return results;
    } catch (error) {
        console.error('Error getting products:', error);
        throw error; 
    }
};

const getProductByIDDB = async (prodID) => {
    try {
        let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products WHERE prodID =?", [prodID]);
        return results;
    } catch (error) {
        console.error('Error getting product by ID:', error);
        throw error;
    }
};

const addProductDB = async (prodName, quantity, amount, Category, prodUrl) => {
    try {
        await pool.query("INSERT INTO bntypjaquqwm92oofyxl.products(prodName, quantity, amount, Category, prodUrl) VALUES(?,?,?,?,?)", [prodName, quantity, amount, Category, prodUrl]);
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

const updateProdDB = async (prodName, quantity, amount, Category, prodUrl, id) => {
    try {
        await pool.query("UPDATE bntypjaquqwm92oofyxl.products SET prodName=?, quantity=?, amount=?, Category=?, prodUrl=? WHERE prodID=?", [prodName, quantity, amount, Category, prodUrl, id]);
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

const deleteProductDB = async (id) => {
    try {
        await pool.query("DELETE FROM bntypjaquqwm92oofyxl.products WHERE prodID=?", [id]);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

export { getProductsDB, getProductByIDDB, addProductDB, updateProdDB, deleteProductDB };
