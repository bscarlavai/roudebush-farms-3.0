roudebushfarms.service('eventSvc', ['$http', function($http) {
    this.getEvents = function(limit) {
        var queryLimit = limit || 0;        
        return $http.get("http://roudebush-farms-poa.herokuapp.com/events?limit=" + queryLimit + "&sort=dateTime")
            .then(function(response) {
                return response.data;
            }, function(response) {
                alert("Error retrieving events.");
            });
    }
}]);