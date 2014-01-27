roudebushfarms.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(route) {
		if($location.path() === '/documents'){
			return route === $location.path() + '#' + $location.hash();
		}

		return route === $location.path();
	}
}]);