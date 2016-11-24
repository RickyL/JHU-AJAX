(function() {
	'use strict';
	angular.module('MenuApp').component('categoryItems', {
		templateUrl: 'js/ng/templates/category-itemlist.tmpl.html',
		bindings: {items: '<'}
	});
}());
