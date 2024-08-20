import {getProductsDB, getProductByIDDB, addProductDB, updateProdDB} from "../model/productDB.js"

const getProducts = async (req, res)=>{
    res.send(await getProductsDB())
}

const getProductByID = async (req, res)=>{
    res.json(await getProductByIDDB(req.params.id))
}

const addProduct = async (req, res) => {
    let {prodName, quantity, amount, Category, prodUrl} = req.body
    await addProductDB(prodName, quantity, amount, Category, prodUrl)

    res.send("Product Added!")
    
}
const updateProd = async (req, res) =>{
    let {prodName, quantity, amount, Category, prodUrl} = req.body
    await updateProdDB(prodName, quantity, amount, Category, prodUrl)
    res.send("Product updated!")
}


export {getProducts, getProductByID, addProduct, updateProd}