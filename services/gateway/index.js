const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config()
const db_connect = require('./db_connect');
const router = require('./router/user');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors({
    origin: true
}));

app.use(router);

app.listen(3000, () => console.log(`API Gateway listening on port 3000`));