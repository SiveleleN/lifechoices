import express from "express";
import bodyParser from "body-parser";
import { Products } from "../model/products.js";
const productRouter = express.Router()
// fetch all products
productRouter.get('/', (req, res)=>{
    try {
        products.fetchProducts(req,res)
    } catch (e) {
        res.json({
            status: statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
// add a product
productRouter.get('/:id', (req, res)=>{
    try {
        products.fetchProducts(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product.'
        })
    }
})
productRouter.post('/addProduct', bodyParser.json(), (req,res)=>{
    try {
        products.addProducts(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a product'
        })
    }
})
export{
    productRouter
}
