var express = require('express');
var path = require('path');
var http = require('http');
var worldcup = require('./routes/wc2014');
var app = express();

// ———— CONFIGURATION
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});
// all environments
app.configure(function(){
  app.set('title', 'Pronostics - Brasil 2014');
})
// development only
app.configure('development', function(){
  app.set('db uri', 'localhost/dev');
})
// production only
app.configure('production', function(){
  app.set('db uri', 'n.n.n.n/prod');
})

// HOME PAGE

// Rounds
app.get('/rounds', worldcup.rounds);
// Login
app.get('/login', function(req, res){
        res.send('Login');
});




// START SERVER
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

