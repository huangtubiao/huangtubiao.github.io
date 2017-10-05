var opn = require('opn');
var express = require('express');

var port = 8080;

var app = express();

app.use(express.static('./'));

var uri = 'http://localhost:' + port;

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return
    }

    opn(uri)
});
