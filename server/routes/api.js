//Imports from express
const express = require('express');
const router = express.Router();

//Imports from mongodb
const MongoClient = require('mongodb').MongoClient;
//ObjectID useful for inserting data inside database
const ObjectID = require('mongodb').ObjectID;

//Connection to location -> mongodb://localhost:27017/barcode_scanner
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/barcode_scanner', (err, db) => {
        if(err) return console.log(err);

        closure(db);
    });
};

//Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//Get all users (READ)

router.get('/users', (req, res) =>{
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            //on success
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            //on fail
            .catch((err) =>{
                sendError(err, res);
            });
    });
});

//Module exports
module.exports = router;