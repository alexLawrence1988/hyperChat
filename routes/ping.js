// LF Template: Do not remove these lines
// File generated from LF:Template:Base
// Version: 0.0.1
// Original name: routes/ping.js

var express = require('express');
var router = express.Router();

var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

module.exports = function (config, logger) {
    router.get('/ping', function (req, res) {

        var uptime = new Date() - req.startupTime;
        var output = { memory: process.memoryUsage(), requests: req.requestCount, network: addresses, uptime: uptime, hostname: os.hostname() }

        res.status(200).send(output);
    });

    return router;
}
