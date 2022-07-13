const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const fileUpload = require('express-fileupload');
const { join } = require('path');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

const app = express();

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then(conn => console.log('Connection success!'))
    .catch(err => {
        throw new Error(err.message);
    });

// Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const authencticateJwt = require('./model/auth/authenticate');

// Upload files
app.use(fileUpload());
app.post('/upload', (req, res) => {
    let uploadFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    uploadFile = req.files.uploadFile;
    uploadPath = join('./public/img', uploadFile.name);

    // Use the mv() method to place the file somewhere on your server
    uploadFile.mv(uploadPath, (err) => {
        if (err)
            return res.status(500).send(err);

        res.json({
            success: true, 
            name: uploadFile.name,
            path: uploadPath.replace(/\\/g, '/').replace('public/', ''),
        });
    });
});

// Products
app.use('/product', authencticateJwt, require('./controller/product/router'));
app.use('/category', require('./controller/category/router'));
app.use('/login', require('./controller/login/router'));
app.use('/user', require('./controller/user/router'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', (req, res) => {
    console.log(req.url);
    res.send('api server');
});

app.use((err, req, res, next) => {
    res.status = 500;
    res.json({
        hasError: true,
        message: 'Server Error',
    });
});

module.exports = app;
