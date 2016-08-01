roudebushfarms.controller('meetingCtrl', ['$scope', '$routeParams', 'eventSvc', function($scope, $routeParams, eventSvc) {
	$scope.getSubViewPath = function(){
		if($routeParams.subView === 'information') {
			$scope.subViewPath = 'templates/meeting-info.html';
		}
		else if($routeParams.subView === 'schedule') {
			$scope.subViewPath = 'templates/meeting-sched.html';
		}
		else {
			$scope.subViewPath = 'templates/meeting-info.html';	
		}
	}

	eventSvc.getEvents(0)
		.then(function(data) {
			$scope.meetings = data;
		});

	$scope.getSubViewPath();
}]);