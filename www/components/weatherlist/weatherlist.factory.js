(function () {
    'use strict';
    angular.module('weatherapp.weatherlist')
        .factory('WeatherListFactory', WeatherListFactory);

    function WeatherListFactory($http) {
        return {
            getWeatherData: function(url) {
                return $http.get(url);
            }
        }
    }
})();