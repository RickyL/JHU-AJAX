(function() {
	'use strict';
	angular.module('MenuApp').config(RoutesConfig);
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {

		// Default page
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'js/ng/templates/home.tmpl.html'
		});

		$stateProvider.state('home.categories', {
			url: 'categories',
			templateUrl: 'js/ng/templates/categories.tmpl.html',
			controller: 'CategoriesController',
			controllerAs: 'ctrl',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories().then(function(data){return data.data;});
				}]
			}
		});

		$stateProvider.state('home.special', {
			url: 'special',
			template: '<div class="text-center"><h2>Coming Soon</h2></div>'
		});

		$stateProvider.state('home.categories.items', {
			url: '/items/{categoryName}',
			template: '<category-items items="ctrl.categoryItems"></category-items>',
			controller: 'ItemsController',
			controllerAs: 'ctrl',
			resolve: {
				categoryItems: ['MenuDataService', '$stateParams',
				 function (MenuDataService, $stateParams) {
					return MenuDataService.getItemsForCategory($stateParams.categoryName).then(function (data) {return data.data;});
				}]
			}
		});
	};
}());
