/**
 * @license Ionic-Weather-Application
 * (c) 2015 Sascha Sambale, http://www.project-webdev.com
 * License: MIT
 */
(function () {
  'use strict';

  // adding 'remove' function to arrays
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

  // adding 'remove' function to arrays
  Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
      if (this[i] === obj) {
        return true;
      }
    }
    return false;
  };

  /**
   * @ngdoc module
   * @name weatherapp.locations
   * @description
   *
   * The weatherapp.locations module provides all necessary components for the 'Locations' screen of the application.
   *
   * You can add a new location by just typing the name or by using GPS. You can also remove locations that you don't need anymore.
   *
   **/
  angular.module('weatherapp.locations')
  /**
   * @ngdoc factory
   * @name LocationService
   * @requires LocationStorageService
   * @requires $q
   * @requires $cordovaGeolocation
   * @requires WeatherListFactory
   * @requires WEATHER_API_URL
   * @description
   *
   * The `LocationService` handles the low level stuff like storing and retrieving data from the LocalStorage and retrieving data from the OpenWeatherMap API.
   *
   */
    .factory('LocationService', ['LocationStorageService', '$q', '$cordovaGeolocation', 'WeatherListFactory', LocationService]);

  function LocationService(LocationStorageService, $q, $cordovaGeolocation, WeatherListFactory) {
    // The key to store our locations in - we'll use a simple key:[array] solution.
    var LOCATION_STORAGE_KEY = 'l0c4t10nK3y';

    /**
     * Stores a given location to the LocalStorage.
     * @param {string[]} location The location to store
     */
    function storeLocation(location) {
      LocationStorageService.set(LOCATION_STORAGE_KEY, location);
    }

    /**
     * Retrieves all locations from the LocalStorage.
     * @returns {string[]} list of all stored locations
     */
    function getLocations() {
      return LocationStorageService.get(LOCATION_STORAGE_KEY);
    }

    return {

      /**
       * Retrieves all stored locations.
       * @returns {string[]} list of all stored locations
       */
      getLocations: function () {
        return getLocations();
      },

      /**
       * Retrieves the current location from the device (by using its GPS service).
       * @returns {Promise} A promise that returns a location if resolved and nothing if rejected.
       */
      getCurrentLocation: function () {
        // set the options for our GPS request, see: http://ngcordova.com/docs/plugins/geolocation
        var options = {timeout: 10000, enableHighAccuracy: true};
        return $q(function (resolve, reject) {
          $cordovaGeolocation
            .getCurrentPosition(options)
            .then(function (position) {
              // if the GPS data has been retrieved (latitude and longitude), call the OpenWeatherMap API to resolve the location name
              WeatherListFactory.getWeatherDataByLatLong(position.coords.latitude, position.coords.longitude).then(function (response) {
                //noinspection JSUnresolvedVariable
                resolve(response.data.name + ', ' + response.data.sys.country);
              });
            }, function () {
              reject();
            });
        });
      },

      /**
       * Adds a given location to the list of locations.
       * @param {string} location The location to store
       */
      addLocation: function (location) {
        var addLocations = getLocations();
        if (!addLocations.contains(location)) {
          addLocations.push(location);
          storeLocation(addLocations);
        }
        return getLocations();
      },

      /**
       * Removes a given location from the list of locations.
       * @param {string} location The location to remove
       */
      removeLocation: function (location) {
        var removeLocations = getLocations();
        removeLocations.remove(location);
        storeLocation(removeLocations);
        return getLocations();
      }
    };
  }
})();