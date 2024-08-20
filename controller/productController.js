import {getProductsDB} from "../model/productDB.js"

const getProducts = async (req, res)=>{
    res.send(await getProductsDB())
}

export {getProducts}