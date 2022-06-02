const express = require('express');
const baseService = require('../base/service');

module.exports = (model) => {
    const service = baseService(model);
    return {
        findAll(req, res, next) {
            return service.findAll()
                .then(list => res.json(list));
        }
    };
};
