/**
 * @license Ionic-Weather-Application
 * (c) 2015 Sascha Sambale, http://www.project-webdev.com
 * License: MIT
 */
(function () {
  'use strict';
  /**
   * @ngdoc module
   * @name weatherapp.weatherlist
   * @description
   *
   * The weatherapp.weatherlist module handles the display of the weather data cards.
   *
   **/
  angular.module('weatherapp.weatherlist')
    .factory('WeatherListFactory', ['$http', '$q', 'WEATHER_API_URL', 'WEATHER_API_IMAGE_URL', WeatherListFactory]);
  /**
   * @ngdoc factory
   * @name WeatherListFactory
   * @requires $http
   * @param {string} location The location to call get the weather data from
   * @description
   *
   * The `WeatherListFactory` calls the OpenWeatherMap REST API to fetch the location data and knows how to generate the image url for the weather icons.
   *
   */
  function WeatherListFactory($http, $q, WEATHER_API_URL, WEATHER_API_IMAGE_URL) {
    return {
      getWeatherData: function (location) {
        return $http.get(WEATHER_API_URL + 'q=' + location);
      },
      getWeatherDataByLatLong: function (lat, long) {
        return $http.get(WEATHER_API_URL + 'lat=' + lat + '&lon=' + long);
      },

      updateWeatherIcon: function (data) {
        return $q(function (resolve) {
          data.weather[0].icon = WEATHER_API_IMAGE_URL + data.weather[0].icon + '.png';
          resolve(data);
        });
      }
    };
  }
})();