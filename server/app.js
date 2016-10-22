var express = require('express');
var bodyParder = require('body-parser');

var app = express();
app.use(bodyParder());

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post('/test', function (req, res) {
  console.log("test");
  res.json({ text: "hahahaha"});
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
