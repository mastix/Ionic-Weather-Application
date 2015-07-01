(function () {
    'use strict';

    Array.prototype.remove = function () {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    Array.prototype.contains = function (obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    };

    angular.module('weatherapp.locations')
        .factory('LocationService', function (LocationStorageService, $cordovaGeolocation, WeatherListFactory, WEATHER_API_URL) {
            var LOCATION_STORAGE_KEY = 'l0c4t10nK3y';

            function storeLocation(location) {
                LocationStorageService.set(LOCATION_STORAGE_KEY, location);
            }

            function getLocations() {
                return LocationStorageService.get(LOCATION_STORAGE_KEY);
            }

            return {
                getLocations: function () {
                    return getLocations();
                },

                getCurrentLocation: function (callback, error) {
                    var options = {timeout: 10000, enableHighAccuracy: true};
                    $cordovaGeolocation
                        .getCurrentPosition(options)
                        .then(function (position) {
                            WeatherListFactory.getWeatherData(WEATHER_API_URL + 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude).then(function (response) {
                                callback(response.data.name + ', ' + response.data.sys.country);
                            });

                        }, function (err) {
                            error(err);
                        });
                },

                addLocation: function (location) {
                    var addLocations = getLocations();
                    if (!addLocations.contains(location)) {
                        addLocations.push(location);
                        storeLocation(addLocations);
                    }
                    return getLocations();
                },

                removeLocation: function (location) {
                    var removeLocations = getLocations();
                    removeLocations.remove(location);
                    storeLocation(removeLocations);
                    return getLocations();
                }
            };
        });
})();