roudebushfarms.service('eventSvc', ['$http', function($http) {
    this.getEvents = function(limitByDate) {
        var queryFilter = limitByDate ? '&dateTime=1' : '';
        return $http.get("http://roudebush-farms-poa.herokuapp.com/events?limit=0&sort=-dateTime" + queryFilter)
            .then(function(response) {
                return response.data;
            }, function(response) {
                alert("Error retrieving events.");
            });
    }
}]);