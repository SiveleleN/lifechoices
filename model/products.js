import {connection as db} from "../config/index.js"
class Products{
    fetchProducts(req, res){
        const qry = `Select prodID, prodName,
        prodQuantity, userID
        From Products;`
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProducts(req,res){
        const qry = `
        select prodID, prodName, prodQuantity,userID
        From Products
        where prodID = ${req.params.id};`
        db.query(qry,(err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProduct(req,res){
        const qry = `
        INSERT INTO Product
        set ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            })
        })
    }
}
export{
    Products
}
