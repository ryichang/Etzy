'use strict';

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.image='http://palazzoducale.visitmuve.it/wp-content/uploads/2013/01/Manet-02-web1.jpg';

  $scope.button = function(product) {
    console.log('button was clicked', product, $scope.image);
    Products.saveProduct(product, $scope.image);
  };
});