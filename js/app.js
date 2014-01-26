var roudebushfarms = angular.module('roudebushfarms',['ngRoute']);

roudebushfarms.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
			templateUrl: '/templates/index.html',
			controller: 'homeController'
		});

	$routeProvider.when('/gallery', {
			templateUrl: '/templates/gallery.html',
			controller: 'galleryController'
		});
}]);