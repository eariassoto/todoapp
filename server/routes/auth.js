var jwt = require('jwt-simple');

var auth = {

  login: function(req, res) {

    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    // Busqueda en la BD y comprueba si las credenciales son validas
    var dbUserObj = auth.validate(username, password);
   
    if (!dbUserObj) { // Si la autenticacion falla
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    if (dbUserObj) {
      // si hay autenticacion es exitosa genere un token
      // y envieselo al cliente

      res.json(genToken(dbUserObj));
    }

  },

  validate: function(username, password) {
    // agregar funcionalidad de BD
    var dbUserObj = { 
      name: 'emmanuel',
      role: 'admin',
      username: 'emma@arias'
    };
    return dbUserObj;
  },

  validateUser: function(username) {
    // agregar funcionalidad de BD
    var dbUserObj = { 
      name: 'emmanuel',
      role: 'admin',
      username: 'emma@arias'
    };

    return dbUserObj;
  },
}

// privado
function genToken(user) {
  var expires = expiresIn(7); // 7 ias
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;