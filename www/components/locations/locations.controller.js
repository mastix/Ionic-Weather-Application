(function () {
    'use strict';
    angular.module('weatherapp.locations', ['weatherapp.weatherlist', 'ngCordova'])
        .controller('LocationsController', function ($scope, $q, LocationService, WeatherListFactory, WEATHER_API_URL) {
            $scope.addedLocation = '';
            $scope.locations = LocationService.getLocations();

            $scope.removeLocation = function (location) {
                $scope.locations = LocationService.removeLocation(location);
                $scope.addedLocation = '';
            };

            $scope.addLocation = function (location) {
                validateLocation(location).then(function () {
                    $scope.locations = LocationService.addLocation(location);
                    $scope.addedLocation = '';
                },function(){
                    alert('Please check your settings!');
                });
            };

            $scope.getCurrentLocation = function () {
                LocationService.getCurrentLocation(function (location) {
                    $scope.addedLocation=location;
                }, function (err) {
                    alert(err);
                });
            };

            function validateLocation(location) {
                //TODO check if it already exists in the list!
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