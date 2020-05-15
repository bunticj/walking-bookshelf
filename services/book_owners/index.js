const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    userRoutes = require('./router/user'),
    bookRoutes = require('./router/book'),
    port = process.env.PORT || 4000;

require('dotenv').config();

app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000/'}));

//Routes
app.use('/',userRoutes);
app.use('/',bookRoutes);

app.listen(port, () => console.log(`book_owners service listening on port ${port}`));

