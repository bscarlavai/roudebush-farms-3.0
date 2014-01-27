var roudebushfarms = angular.module('roudebushfarms', ['ngRoute']);

roudebushfarms.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/index.html',
			controller: 'homeCtrl'
		})
		.when('/newsletters', {
			templateUrl: 'templates/newsletters.html',
			controller: 'newslettersCtrl'
		})
		.when('/gallery', {
			templateUrl: 'templates/gallery.html',
			controller: 'galleryCtrl'
		})
		.when('/members', {
			templateUrl: 'templates/members.html',
			controller: 'membersCtrl'
		})
		.when('/meeting/:subView', {
			templateUrl: 'templates/meeting.html',
			controller: 'meetingCtrl'
		})
		.when('/advertising', {
			templateUrl: 'templates/advertising.html',
			controller: 'advertisingCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		});
}]);