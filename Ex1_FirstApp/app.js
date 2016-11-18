(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yoan";
  $scope.sayHello = function (){
    return "Hello Coursera !";
  }
});

})();
