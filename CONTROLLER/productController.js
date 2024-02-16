import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";

const productRouter = express.Router()
productRouter.get('/', async (req, res) => {
    try {
        await product.fetchproduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve product',
        });
    }
});
productRouter.get('/:id', async (req, res) => {
    try {
        await product.fetchproducts(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve product',
        });
    }
});
productRouter.post('/addProduct', bodyParser.json(), async (req, res) => { // Added 'async' for asynchronous operation
    try {
        await product.addproduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve product',
        });
    }
});
export default productRouter.express ;
