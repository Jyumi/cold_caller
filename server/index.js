const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');

// Init New Express Server
const server = express();
const port = 3000;

// Middleware
server.use(morgan('dev'));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

// Static Files and Router
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router);

server.listen(port, () => console.log(`listening on ${port}`))