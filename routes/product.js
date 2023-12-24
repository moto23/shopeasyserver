const express = require('express');
const {createProduct} = require('../controller/product-controller')
const router = express.Router();
const {addCategory, getCategories} = require('../controller/categoryC');
const Product = require('../model/product');
const { requireSignin } = require('../common-middleware/indexx');
router.post('/product/create',createProduct);
router.get('/category/getcategory',getCategories);

module.exports = router;