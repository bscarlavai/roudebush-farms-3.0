roudebushfarms.controller('sidebarCtrl', ['$scope', '$routeParams', 'eventSvc', function($scope, $routeParams, eventSvc) {
	eventSvc.getEvents(true)
		.then(function(data) {
			$scope.meetings = data;
		});
}]);