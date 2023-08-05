// Wrap the code in an IIFE to avoid global scope pollution
(function () {
  'use strict';

  // Create the Angular module
  angular.module('LunchCheck', [])

  // Define the controller and inject $scope
  .controller('LunchCheckController', LunchCheckController);

  // Inject dependencies to protect from minification
  LunchCheckController.$inject = ['$scope'];

  // Controller function
  function LunchCheckController($scope) {
    $scope.lunchItems = '';
    $scope.message = '';

    $scope.checkLunch = function () {
      var items = $scope.lunchItems.trim();

      if (items === '') {
        $scope.message = '';
      } else {
        var itemList = items.split(',');
        if (itemList.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };
  }

})();
