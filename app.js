(function () {
  'use strict';

  // Create the Angular module
  angular.module('ShoppingListCheckOff', [])

  // Define the ShoppingListCheckOffService to share data between controllers
  .service('ShoppingListCheckOffService', function () {
    var service = this;
    var toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "soda", quantity: 2 },
      { name: "apples", quantity: 8 },
      { name: "bananas", quantity: 6 }
    ];
    var boughtList = [];

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

    service.buyItem = function (index) {
      var item = toBuyList.splice(index, 1)[0];
      boughtList.push(item);
    };
  })

  // Define the ToBuyShoppingController
  .controller('ToBuyShoppingController', ToBuyShoppingController);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  // Define the AlreadyBoughtShoppingController
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

})();
