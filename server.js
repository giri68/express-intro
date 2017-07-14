// server.js
  // SERVER-SIDE JAVASCRIPT
  var express = require('express');
  var app = express();

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.static("public"));
//getting the request from local(localhost:3000) and calling function
//function takes request and it does response to the client.
var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];
  var taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];
  app.get('/api/taquerias', function (req, res) {
    res.json(taquerias);
  });
  app.get('/', function (req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
    console.log(__dirname);
  });

  app.get('/api/albums', function (req, res) {
    res.json(albums);

  });
// it listens any request from client through 3000 port for local but for production uses environment port.
  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
