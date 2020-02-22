const express = require('express');
const myRouter = require('./router');
const app = express();
const bodyParser = require('body-parser');

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', myRouter);

app.listen(3000, function () {
    console.log('running at port 3000');
});