'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

mongoose.connect('mongodb+srv://daniel:vapara123@cluster0-dydox.mongodb.net/admin?replicaSet=Cluster0-shard-0&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1')




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

 
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;