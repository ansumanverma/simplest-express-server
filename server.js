var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World Ansible from PM2!!!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
