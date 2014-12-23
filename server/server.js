var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// para todas la solicitudes aplicar esto
app.all('/*', function(req, res, next) {
  // encabezados CORS
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

  res.header("Access-Control-Allow-Origin", "*"); 
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// revisa las solicitudes hechas al API
// autentifica la solicitud con el token
app.all('/api/v1/*', [require('./middlewares/validateRequest')]);

app.use('/', require('./routes'));

// cualquier otra debe ser tratada como un error
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// iniciar el servidor
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});