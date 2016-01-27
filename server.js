'use strict';

var express = require('express');
var formatter = require(process.cwd() + '/app/controllers/dateFormatter.js');

var app = express();

app.get('/*', function(req, res) {
    var date_component = decodeURIComponent(req.url.slice(1));
    
    if (date_component == '') {
        
        res.sendFile(process.cwd() + '/public/index.html');
        
    } else {
        
        var date_json = formatter.build_json(date_component);
        res.send(date_json);
        
    }
});

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port 8080...');
});