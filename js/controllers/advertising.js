roudebushfarms.controller('advertisingCtrl', ['$scope', '$q', '$sce', function($scope, $q, $sce) {
	$scope.fetch = function() {
		var url = "http://www.parsecdn.com/js/parse-1.2.16.min.js";
		var deferred = $q.defer();
		$.getScript(url, function() {
			Parse.initialize("uQSY8jp0RaTBkywzPZlRvm9tOOZzpnouVyb7soUS", "DAyMr92n5ldc3ID4vGIT713jWJo0OLiyPJe975WJ");

			var advertisement = Parse.Object.extend("Advertisement");
			var query = new Parse.Query(advertisement);
			query.find({
			  success: function(results) {
			  	deferred.resolve(results);
			  },
			  error: function(error) {
			  	deferred.reject(error);
			  }
			});
		});

		return deferred.promise;
	}

	$scope.fetch().then(function(data){

		var ads = _.map(data, function(ad){
			return {
				category: serviceCategories[ad.get('category')],
				description: $sce.trustAsHtml(ad.get('description').replace('%%url%%', ad.get('url')).replace('%%phone%%', ad.get('phone'))),
				phone: ad.get('phone'),
				url: ad.get('url')
			};
		});

		// Group the ads by category
		ads = _.groupBy(ads, 'category');

		$scope.advertisements = ads;
	});

	var serviceCategories = [
		"Child Care", //0
		"Cosmetics & More", //1
		"Custom Jewelry & Gifts", //2
		"Education", //3
		"Food", //4
		"Interior Decorating", //5
		"Jewelry & More", //6
		"Fragrance", //7
		"Marketing", //8
		"Party Supplies", //9
		"Piano & Voice Lessons", //10
		"Photography", //11
		"Signs & Banners", //12
		"Interior/Exterior Painting", //13
		"DJ Service", //14
		"Organization", //15
		"Realtor", //16
		"Cleaning", //17
		"Electronics", //18
		"Graphic Design", //19
        "Fitness", //20
        "HVAC"]; //21
}]);