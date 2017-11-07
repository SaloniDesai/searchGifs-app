var app = angular.module("searchApp", []);
	app.controller("searchAppController", function($scope, $http) {
		var vm = this;
		getTrendingGifs();
		//look for the gifs based on the input
		vm.performSearch = function() {
			vm.giphies = [];
			var url;
			var rating = "pg";
			var gif = vm.search.gif.replace(/ /g, "+");
			url = "https://api.giphy.com/v1/gifs/search?api_key=VQZuKmlp0EzS8AIVQ9H7PVpzAdrjjVpw&q="+ gif;
			$http.get(url).then(function(success) {
				angular.forEach(success.data.data, function(value, key) {
					if(value.rating === rating) {
						vm.giphies.push(value);
					}
				});
			});
		}
		//get all the trending gifs
		function getTrendingGifs() {
			var trendingURL = "https://api.giphy.com/v1/gifs/trending?api_key=VQZuKmlp0EzS8AIVQ9H7PVpzAdrjjVpw&limit=5&rating=PG";
			vm.trendingGifs = [];
			$http.get(trendingURL).then(function(success) {
				vm.trendingGifs = success.data.data;
				console.log("trendingGifs", vm.trendingGifs);
			});
		}
	});