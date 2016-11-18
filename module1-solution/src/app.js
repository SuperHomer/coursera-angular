(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.displayMessage = function () {
    console.log($scope.lunch);
    var message = checkLunck($scope.lunch);
    $scope.message = message;
  };

  function checkLunck (string) {
    var message = "";
    var lunchLength = $scope.lunch.split(';').length;
    console.log(lunchLength);

    if ($scope.lunch === "") {
      $scope.myColor = "red";
      message = "Please enter data first";
    }
    else if (lunchLength <= 3) {
      $scope.myColor = "green";
      message = "Enjoy!";
    }
    else if (lunchLength > 3) {
      $scope.myColor = "green";
      message = "Too much!";
    }
    return message;
  };
}


})();
