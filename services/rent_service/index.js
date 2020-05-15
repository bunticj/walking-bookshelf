const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 4001,
    db_connect = require('./db_connect');

require('dotenv').config();

app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000/'
}));

app.listen(port, () => console.log(`rent_service listening on port ${port}`));