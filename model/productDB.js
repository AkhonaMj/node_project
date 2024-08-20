import  {pool} from "../config/config.js"

const getProductsDB = async () =>{
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products")
    return results
}

const getProductByIDDB = async (prodID) => {
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products WHERE prodID =?", [prodID])
    return results
}

const addProductDB = async (prodName, quantity, amount, Category, prodUrl) => {
    await pool.query("INSERT INTO  bntypjaquqwm92oofyxl.products(prodName, quantity, amount, Category, prodUrl) VALUES(?,?,?,?,?)", [prodName, quantity, amount, Category, prodUrl])
    
}
const updateProdDB = async (prodName, quantity, amount, Category, prodUrl, id) => {
    await pool.query("UPDATE bntypjaquqwm92oofyxl.products SET prodName=?, quantity=?, amount=?, Category=?, prodUrl=?  WHERE prodID=? ",[prodName, quantity, amount, Category, prodUrl, id])
    
}

const deleteProductDB = async (id) => {
    await pool.query("DELETE FROM bntypjaquqwm92oofyxl.products WHERE prodID=?", [id])
    
}
export {getProductsDB, getProductByIDDB, addProductDB, updateProdDB, deleteProductDB}