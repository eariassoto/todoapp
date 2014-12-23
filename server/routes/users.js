var users = {

  getAll: function(req, res) {
    var allusers = data; // agregar funcionalidad de BD
    res.json(allusers);
  },

  getOne: function(req, res) {
    var id = req.params.id;
    var user = data[0]; // agregar funcionalidad de BD
    res.json(user);
  },

  create: function(req, res) {
    var newuser = req.body;
    data.push(newuser); // agregar funcionalidad de BD
    res.json(newuser);
  },

  update: function(req, res) {
    var updateuser = req.body;
    var id = req.params.id;
    data[id] = updateuser // agregar funcionalidad de BD
    res.json(updateuser);
  },

  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // agregar funcionalidad de BD
    res.json(true);
  }
};

var data = [{
  name: 'user 1',
  id: '1'
}, {
  name: 'user 2',
  id: '2'
}, {
  name: 'user 3',
  id: '3'
}];

module.exports = users;