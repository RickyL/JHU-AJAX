(function() {
	'use strict';
	angular.module('MenuApp').controller('CategoriesController', CategoriesController);
	CategoriesController.$inject = ['categories'];
	function CategoriesController (categories) {
		this.categories = categories;
		this.shortName = '';
		this.getName = function (name) {
			this.shortName = name;
		}.bind(this);
	};
}());
