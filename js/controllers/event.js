roudebushfarms.controller('eventCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.isInFuture = function(dateStr) {
		return moment(dateStr) > moment.utc(); 
	}

    $scope.isThisYear = function(dateStr) {
        return moment(dateStr).year() == moment().year();
    }
}]);