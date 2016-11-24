(function() {
	'use strict';
	angular.module('MenuApp').component('categoriesList', {
		templateUrl: 'js/ng/templates/categories-list.tmpl.html',
		bindings: {
			categories: '<',
			shortName: '@name',
			getName: '&'
		}
	});
}());
