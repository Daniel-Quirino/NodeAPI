'use strict';

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        "version": "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    res.status(201).send({"id" : req.params.id, "body": req.body});
});

app.use('/products', put);
app.use('/products', create);
app.use('/', route);


module.exports = app;