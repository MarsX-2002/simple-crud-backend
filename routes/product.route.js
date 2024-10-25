const express = require('express');
const Product = require('../models/product.model.js')
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')

// get all products
router.get('/', getProducts)
// get single product
router.get('/:id', getProduct)

// create a product
router.post('/', createProduct)

// update a product
router.put('/:id', updateProduct)

// delete a product
router.put('/:id', deleteProduct)

module.exports = router;
