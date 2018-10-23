// LF Template: Do not remove these lines
// File generated from LF:Template:Bespoke
// Version: 0.0.1
// Original name: routes/__name__js.tmpl
// Description: Worker microservice, route handlers
// Created: Fri Jul 13 2018 11:09:38 GMT+0100 (GMT Daylight Time)

var express = require('express');
var router = express.Router();
module.exports = function (clientHelper, logger) {
    
    router.get('/chat', function (req, res) {
        res.sendFile(__dirname + '/views/index.html');
    });    

    return router;
};
