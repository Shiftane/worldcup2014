var express = require('express');
var app = express();

// simple logger
app.use(express.logger());

// Use public folder for static files
app.use(express.static(__dirname + '/public'));

// First get method
app.get('/', function(req, res){
        res.send('Hello World');
});

// ———— CONFIGURATION
// all environments
app.configure(function(){
  app.set('title', 'My Application');
})

// development only
app.configure('development', function(){
  app.set('db uri', 'localhost/dev');
})

// production only
app.configure('production', function(){
  app.set('db uri', 'n.n.n.n/prod');
})

// START SERVER
app.listen(8080);
console.log('Server Started')

