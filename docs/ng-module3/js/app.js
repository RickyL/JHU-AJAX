(function () {
  angular.
    module("NarrowItDownApp", []).
    controller("NarrowItDownCtrl", NarrowItDownCtrl).
    service("MenuSearchService", MenuSearchService).
    directive("items", Items).
    constant("URL", "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownCtrl.$inject = ["MenuSearchService"];
  function NarrowItDownCtrl(MenuSearchService) {
    this.found = [];
    this.term = "";
    this.showError = false;
    this.search = function () {
      this.found = [];
      if (this.term) {
        MenuSearchService.getMatches(this.term).then(function (items) {
          this.found = items;
          this.showError = (this.found.length === 0)
        }.bind(this));
      } else {
        this.showError = (this.found.length === 0)
      }
    }.bind(this);
    this.remove = function (index) {
      this.found.splice(index, 1);
    }.bind(this);
  }

  MenuSearchService.$inject = ["$http", "URL"];
  function MenuSearchService($http, URL) {
    this.getMatches = function (term) {
      return $http({url: URL,method: 'GET'}).then(function (response) {
        return response.data.menu_items.filter(function (item) {
          return item.description.indexOf(term) !== -1;
        });
      }).catch(function (error) {
        console.log(error);
      });
    };
  }

  function Items() {
    var obj = {
      templateUrl: "items.html",
      scope: {
        items: "<",
        onRemove: "&",
        error: "<",
      }
    };
    return obj;
  }
})();