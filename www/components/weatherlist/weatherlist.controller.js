(function () {
    'use strict';
    angular.module('weatherapp.weatherlist', ['weatherapp.locations'])
        .controller('WeatherlistController', ['$scope', 'LocationService', 'WEATHER_API_URL', 'WEATHER_API_IMAGE_URL', 'WeatherListFactory',WeatherListCtrl]);

    function WeatherListCtrl($scope, LocationService, WEATHER_API_URL, WEATHER_API_IMAGE_URL, WeatherListFactory) {
        $scope.$on('$ionicView.enter', function(){
            $scope.locationData= [];
            //TODO Show empty String when no locations are set.
            var locations = LocationService.getLocations();
            $scope.noLocation=locations.length<1;
            if (!$scope.noLocation){
                locations.forEach(function (location) {
                    WeatherListFactory.getWeatherData(WEATHER_API_URL + 'q=' + location).then(function (response) {
                        response.data.weather[0].icon=WEATHER_API_IMAGE_URL+response.data.weather[0].icon+'.png';
                        $scope.locationData.push(response.data);
                    });
                });
            }
        });
    }
})();