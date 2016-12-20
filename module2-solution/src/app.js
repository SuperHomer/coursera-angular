(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buy = function (index) {
    console.log(index);
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = [
    {name: "Biscuits", quantity: "10"},
    {name: "Cookies", quantity: "20"},
    {name: "Chocolate", quantity: "1"},
    {name: "Milk", quantity: "1"},
    {name: "Hamburgers", quantity: "15"}
  ];
  var boughtItems = [];

  service.buyItem = function (index) {

    var obj = toBuyItems.splice(index,1);
    //console.log("obj: ", obj[0]);
    var item = {
      name: obj[0].name,
      quantity: obj[0].quantity
    };
    //console.log("item to push: ",item);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
