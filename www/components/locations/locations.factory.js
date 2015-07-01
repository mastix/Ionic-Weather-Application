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
        .factory('LocationService', function ($cordovaGeolocation) {
            var locations = ['Stuttgart', 'Heilbronn'];
            return {
                getLocations: function () {
                    return locations;
                },

                getCurrentLocation: function (callback, error) {
                    var options = {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
                    $cordovaGeolocation
                        .getCurrentPosition(options)
                        .then(function (position) {
                            callback(position.coords.latitude, position.coords.longitude);
                        }, function (err) {
                            error(err);
                        });
                },

                addLocation: function (location) {
                    locations.push(location);
                    return locations;
                },

                removeLocation: function (location) {
                    alert("Removing: " + location);
                    locations.remove(location);
                    return locations;
                }
            };

        });
})();