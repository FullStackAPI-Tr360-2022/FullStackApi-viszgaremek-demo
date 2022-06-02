const express = require('express');
const Product = require('../../model/product');
const controller = require('../base/controller')(Product);

const router = express.Router();

// get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

module.exports = router;
