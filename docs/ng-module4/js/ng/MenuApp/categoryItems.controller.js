(function() {
	'use strict';
	angular.module('MenuApp').controller('ItemsController', ItemsController);
	ItemsController.$inject = ['categoryItems'];
	function ItemsController ( categoryItems) {
		this.categoryItems = categoryItems.menu_items;
	};
}());
