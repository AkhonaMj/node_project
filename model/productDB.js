import  {pool} from "../config/config.js"

const getProductsDB = async () =>{
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products")
    return results
}

const getProductByIDDB = async (prodID) => {
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products WHERE prodID =?", [prodID])
    return results
}
export {getProductsDB, getProductByIDDB}