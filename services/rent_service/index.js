const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 4001;

require('dotenv').config();
const db_connect = require('./db_connect');

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