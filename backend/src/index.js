const app = require('./server');

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
