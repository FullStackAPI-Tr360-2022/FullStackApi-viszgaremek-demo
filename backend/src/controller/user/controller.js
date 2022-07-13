const service = require('./service');

exports.findAll = async (req, res, next) => {
    const list = await service.findAll();
    res.json(list);
};

exports.findOne = async (req, res, next) => {
    const entity = await service.findOne(req.params.id);
    res.json(entity);
};

exports.create = async (req, res, next) => {
    const { body } = req;
    if (!body.firstName || !body.lastName || !body.address || !body.email || !body.password ) {
        res.statusCode = 500;
        return res.json({error: 'data is not correct'});
    }

    const user = await service.create(body);
    res.json(user);
};
