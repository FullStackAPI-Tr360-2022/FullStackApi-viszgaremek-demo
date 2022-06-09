const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        // Bearer sdfdsfsdfdsfds14651651sdf65sd1f6sd1f.sdf654dsf6
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'egynagyontitkosszöveg', (err, user) => {
            if (err)  {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
