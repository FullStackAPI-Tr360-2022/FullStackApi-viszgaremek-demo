const baseService = require('../base/service');
const Product = require('../../model/product');

const service = baseService(Product);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};
