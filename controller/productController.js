import {getProductsDB, getProductByIDDB} from "../model/productDB.js"

const getProducts = async (req, res)=>{
    res.send(await getProductsDB())
}

const getProductByID = async (req, res)=>{
    res.json(await getProductByIDDB(req.params.id))
}



export {getProducts, getProductByID}