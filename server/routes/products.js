var products = {

  getAll: function(req, res) {
    var allProducts = data; // agregar funcionalidad de BD
    res.json(allProducts);
  },

  getOne: function(req, res) {
    var id = req.params.id;
    var product = data[0]; // agregar funcionalidad de BD
    res.json(product);
  },

  create: function(req, res) {
    var newProduct = req.body;
    data.push(newProduct); // agregar funcionalidad de BD
    res.json(newProduct);
  },

  update: function(req, res) {
    var updateProduct = req.body;
    var id = req.params.id;
    data[id] = updateProduct // agregar funcionalidad de BD
    res.json(updateProduct);
  },

  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // agregar funcionalidad de BD
    res.json(true);
  }
};

var data = [{
  name: 'product 1',
  id: '1'
}, {
  name: 'product 2',
  id: '2'
}, {
  name: 'product 3',
  id: '3'
}];

module.exports = products;