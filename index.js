var bodyParser = require('body-parser');
var request = require('request');
var express = require('express');
var app = express();


app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(function (req, res, next) {  // Options middleware
    if (req.method === 'OPTIONS') {
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = true;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,X-HTTP-Method-Override";
        res.writeHead(204, headers);
        res.end();
    } else {
        next();
    }
});
app.use(require('cors')()); // Rest of CORS

app.post('/', function (req, res) {
    request.post({
        url: 'http://bark.phon.ioc.ee/punctuator',
        form: { text: req.body.text }
    }, (error, response, body) => {
        if (error) return res.send(error);
        res.json({ success: true, message: body});
    });
});

app.listen(3000, function () {
    console.log('App listening on port 3000!')
});
