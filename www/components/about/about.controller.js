/**
 * @license Ionic-Weather-Application
 * (c) 2015 Sascha Sambale, http://www.project-webdev.com
 * License: MIT
 */
(function () {
  'use strict';
  /**
   * @ngdoc module
   * @name weatherapp.about
   * @requires ionic
   * @requires ngCordova
   * @description
   *
   * The weatherapp.about module provides all necessary components for the 'About' screen of the application.
   *
   * This screen shows the typical 'About' contents like:
   *
   * * Application name
   * * Application version
   * * Device information
   * * Author information
   * * License information
   **/
  angular.module('weatherapp.about', ['ionic', 'ngCordova'])
    .controller('AboutController', ['$scope', '$cordovaAppVersion', AboutController]);
  /**
   * @ngdoc controller
   * @name AboutController
   * @requires $scope
   * @requires $cordovaAppVersion
   * @description
   *
   * The `AboutController` takes care of retrieving all necessary information from the device. It also provides the author data.
   *
   * Requires the cordova-plugin-app-version (https://github.com/whiteoctober/cordova-plugin-app-version.git) plugin to be installed.
   *
   */
  function AboutController($scope, $cordovaAppVersion) {
    ionic.Platform.ready(function () {
      //retrieves the application version from the config.xml
      $cordovaAppVersion.getAppVersion().then(function (version) {
        $scope.app = {
          version: version
        };
      });
    });

    // get all device information
    var deviceInformation = ionic.Platform.device();

    // check if device information are available and set them to our scope variable
    if (deviceInformation.available === true) {
      $scope.deviceInformation = {
        platform: deviceInformation.platform,
        version: deviceInformation.version,
        manufacturer: deviceInformation.manufacturer.charAt(0).toUpperCase() + deviceInformation.manufacturer.slice(1),
        model: deviceInformation.model
      };
    } else {
      // if no device information could be retrieved, we'll set 'n.a.'
      $scope.deviceInformation = {
        platform: 'n.a.',
        version: 'n.a.',
        manufacturer: 'n.a.',
        model: 'n.a.'
      };
    }

    // This is me... :)
    $scope.author = {
      name: 'Sascha Sambale',
      email: 'mastixmc@gmail.com',
      url: 'http://goo.gl/yduShl'
    };
  }
})
();