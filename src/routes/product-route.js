'use strict'

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next) => {
    res.status(201).send({"id" : req.params.id, "body": req.body});
});

module.exports = router;
