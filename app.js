var express = require('express')
, logfmt = require("logfmt")
, sio = require('socket.io');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});