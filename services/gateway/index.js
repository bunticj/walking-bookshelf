const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db_connect = require('./db_connect'),
    router = require('./router/router');

require('dotenv').config()

app = express();
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