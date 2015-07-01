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

    angular.module('weatherapp.locations')
        .factory('LocationService', function ($cordovaGeolocation,WeatherListFactory,WEATHER_API_URL) {
            var locations = [];
            return {
                getLocations: function () {
                    return locations;
                },

                getCurrentLocation: function (callback, error) {
                    var options = {timeout: 10000, enableHighAccuracy: true};
                    $cordovaGeolocation
                        .getCurrentPosition(options)
                        .then(function (position) {
                            WeatherListFactory.getWeatherData(WEATHER_API_URL + 'lat=' + position.coords.latitude + '&lon='+position.coords.longitude).then(function (response) {
                                callback(response.data.name+', '+response.data.sys.country);
                            });

                        }, function (err) {
                            error(err);
                        });
                },

                addLocation: function (location) {
                    locations.push(location);
                    return locations;
                },

                removeLocation: function (location) {
                    locations.remove(location);
                    return locations;
                }
            };

        });
})();