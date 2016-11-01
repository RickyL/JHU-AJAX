(function(){
  'use strict';
  var app = angular.module('ShoppingListCheckOff', []).
                    controller("ToBuyController", ToBuyController).
                    controller("AlreadyBoughtController", AlreadyBoughtController).
                    service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    this.items = ShoppingListCheckOffService.getToBuy();
    this.message = "Everything is bought!";
    this.buy = function(item){ShoppingListCheckOffService.buyItem(item);};
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    this.items = ShoppingListCheckOffService.getBought();
    this.message = "Nothing bought yet";
  }

  function ShoppingListCheckOffService() {
      var min = 1 ,max = 101;
      var items = [ {name: 'Xbox One',quantity: Math.floor(Math.random() * (max - min) + min)},
                    {name: 'PS4',quantity: Math.floor(Math.random() * (max - min) + min)},
                    {name: 'Wii',quantity: Math.floor(Math.random() * (max - min) + min)},
                    {name: 'Xbox 360',quantity: Math.floor(Math.random() * (max - min) + min)},
                    {name: 'PS3',quantity: Math.floor(Math.random() * (max - min) + min)},
      ];
      var toBuy = items, bought = [];

      this.getToBuy  = function(){return toBuy; };
      this.getBought = function(){return bought;};
      this.buyItem = function (item) {
        var index = toBuy.indexOf(item);
        if (index !== -1) {
          toBuy.splice(index, 1);
          bought.push(item);
        }
      };
    }
})();
