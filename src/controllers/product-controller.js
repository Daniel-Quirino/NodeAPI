'use strict'

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    res.status(201).send({
        "id" : req.params.id, 
        "body": req.body
    });
};