/**
 * @license Ionic-Weather-Application
 * (c) 2015 Sascha Sambale, http://www.project-webdev.com
 * License: MIT
 */
(function () {
  'use strict';
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
   * @name LocationStorageService
   * @requires $window
   * @description
   *
   * The `LocationStorageService` handles the storing and retrieving data from the LocalStorage.
   *
   */
    .factory('LocationStorageService', ['$window', LocationStorageService]);

  function LocationStorageService($window) {
    return {
      set: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      get: function (key) {
        return JSON.parse($window.localStorage[key] || '[]');
      }
    };
  }
})();