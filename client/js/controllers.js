myApp.controller("HeaderCtrl", ['$scope', '$location', 'UserAuthFactory',
  function($scope, $location, UserAuthFactory) {
 
    $scope.isActive = function(route) {
      return route === $location.path();
    }
 
    $scope.logout = function () {
      UserAuthFactory.logout();
    }
  }
]);

myApp.controller("HomeCtrl", ['$scope',
  function($scope) {
    $scope.name = "Home Controller";
  }
]);

myApp.controller("ProductsCtrl", ['$scope', 'dataFactory',
  function($scope, dataFactory) {
    $scope.products = [];
 
    // Access the factory and get the latest products list
    dataFactory.getProducts().then(function(data) {
      $scope.products = data.data;
    });
 
  }
]);
