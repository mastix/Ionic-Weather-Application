(function () {
    'use strict';
    angular.module('weatherapp.weatherlist')
        .constant('WEATHER_API_URL', 'http://api.openweathermap.org/data/2.5/weather?units=metric&')
        .constant('WEATHER_API_IMAGE_URL', 'http://openweathermap.org/img/w/');
})();
