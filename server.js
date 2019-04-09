//Defining constants
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//API file for interacting with MongoDB
const api = require('./server/routes/api');

//Parsers - this is where body parser comes in
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular DIST output folder: look for the path 'dist'
app.use(express.static(path.join(_dirname, 'dist')));

//API location
app.use('/api', api);

//Send all other requests to the angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.Port || '8100';
app.set('port', port);

const server = http.createServer(app);

//server listener
server.listen(port, () => console.log('Running on localhost:${port}'));