roudebushfarms.controller('meetingCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.getSubViewPath = function(){
		if($routeParams.subView === 'information') {
			$scope.subViewPath = 'templates/meeting-info.html';
		}
		else if($routeParams.subView === 'schedule') {
			$scope.subViewPath = 'templates/meeting-schedule.html';
		}
		else {
			$scope.subViewPath = 'templates/meeting-info.html';	
		}
	}

	$scope.getSubViewPath();
}]);