import  {pool} from "../config/config.js"

const getProductsDB = async () =>{
    let [results] = await pool.query("SELECT * FROM bntypjaquqwm92oofyxl.products")
    return results
}

export {getProductsDB}