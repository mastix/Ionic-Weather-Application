(function () {
    'use strict';
    angular.module('weatherapp.weatherlist', ['weatherapp.locations'])
        .controller('WeatherlistController', WeatherListCtrl);

    function WeatherListCtrl($scope, LocationService, WEATHER_API_URL, WEATHER_API_IMAGE_URL, WeatherListFactory) {
        $scope.$on('$ionicView.enter', function(){
            $scope.locationData= [];
            LocationService.getLocations().forEach(function (location) {
                WeatherListFactory.getWeatherData(WEATHER_API_URL + 'q=' + location).then(function (response) {
                    response.data.weather[0].icon=WEATHER_API_IMAGE_URL+response.data.weather[0].icon+".png";
                    $scope.locationData.push(response.data)
                });
            });
        });
    }
})();