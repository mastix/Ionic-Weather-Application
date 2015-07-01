(function () {
    'use strict';
    angular.module('weatherapp.locations', ['weatherapp.weatherlist', 'ngCordova'])
        .controller('LocationsController', function ($scope, $q, $ionicPopup, LocationService, WeatherListFactory, WEATHER_API_URL) {
            $scope.addedLocation = '';
            $scope.$on('$ionicView.enter', function(){
                $scope.addedLocation = '';
                $scope.locations = LocationService.getLocations();

            });

            $scope.removeLocation = function (location) {
                $scope.locations = LocationService.removeLocation(location);
                $scope.addedLocation = '';
            };

            $scope.addLocation = function (location) {
                location = location.trim();
                validateLocation(location).then(function () {
                    $scope.locations = LocationService.addLocation(location);
                    $scope.addedLocation = '';
                }, function () {
                    showError('Error adding location', 'The location you have entered is not a valid location.');
                });
            };

            $scope.getCurrentLocation = function () {
                $scope.addedLocation = '';
                $scope.showSpinner = true;
                LocationService.getCurrentLocation(function (location) {
                    $scope.showSpinner = false;
                    $scope.addedLocation = location;
                }, function () {
                    $scope.showSpinner = false;
                    showError('Error retrieving current location', 'Your location could not be retrieved. Please make sure you have your GPS Location Services enabled.');
                });
            };

            function showError(title, text) {
                $ionicPopup.alert({
                    title: title,
                    template: text
                });
            }

            function validateLocation(location) {
                // use a promise to check whether the city is valid or not
                return $q(function (resolve, reject) {
                    //very simple pre-validation, so we don't stress the web service unnecessarily
                    var myRegExp = /[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*/;
                    // check if the city matches our regular expression
                    if (location && location.match(myRegExp)) {
                        // location matched our Regex... let's test it against the web service directly
                        WeatherListFactory.getWeatherData(WEATHER_API_URL + 'q=' + location).then(function (response) {
                            if (!response.data || response.data.cod === '404') {
                                // web service returned error code, so city is not valid
                                reject();
                            } else {
                                // the city is valid, everything is cool.
                                resolve();
                            }
                        });
                    } else {
                        // looks like the city is not a valid city
                        reject();
                    }
                });
            }
        });
})();