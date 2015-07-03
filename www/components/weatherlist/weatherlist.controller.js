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
  angular.module('weatherapp.weatherlist', ['weatherapp.locations'])
  /**
   * @ngdoc controller
   * @name WeatherlistController
   * @requires $scope
   * @requires LocationService
   * @requires WeatherListFactory
   *
   * @description
   *
   * The `WeatherlistController` constructs an array of location/weather data, by sending the location to the OpenWeatherMap API and storing the result in a variable.
   *
   */
    .controller('WeatherlistController', ['$scope', 'LocationService', 'WeatherListFactory', WeatherlistController]);

  function WeatherlistController($scope, LocationService, WeatherListFactory) {
    $scope.$on('$ionicView.enter', function () {
      $scope.locationData = [];
      $scope.errorLocationRetrieval = false;
      // get all locations from the LocationService
      var locations = LocationService.getLocations();
      $scope.noLocation = locations.length < 1;
      // only display locations when there are some
      if (!$scope.noLocation) {
        // iterate through the stored locations and call the OpenWeatherMap REST API
        locations.forEach(function (location) {
          WeatherListFactory.getWeatherData(location).then(function (response) {
            WeatherListFactory.updateWeatherIcon(response.data).then(function (locationWeather) {
              // store the result in our array, which will be displayed in the view
              $scope.locationData.push(locationWeather);
            });
          }, function () {
            // show error message on screen
            $scope.errorLocationRetrieval = true;
          });
        });
      }
    });
  }
})();