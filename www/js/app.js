/**
 * @license Ionic-Weather-Application
 * (c) 2015 Sascha Sambale, http://www.project-webdev.com
 * License: MIT
 */
(function () {
  'use strict';
  /**
   * @ngdoc module
   * @name weatherapp
   * @requires ionic
   * @requires weatherapp.menu
   * @requires weatherapp.locations
   * @requires weatherapp.weatherlist
   * @requires weatherapp.about
   * @description
   *
   * The weatherapp module is the main module of the application that takes care of the correct routing. It makes sure that the application displays the menu and that all links open the correct page.
   *
   **/
  angular.module('weatherapp', ['ionic', 'weatherapp.menu', 'weatherapp.locations', 'weatherapp.weatherlist', 'weatherapp.about'])
  /**
   * @ngdoc run
   * @requires $ionicPlatform
   * @description
   *
   * Basic ionic setup.
   *
   */
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
  /**
   * @ngdoc config
   * @requires $stateProvider
   * @requires $urlRouterProvider
   * @description
   *
   * Takes care of the routing of the application. Each state declares the view as well as the corresponding controller. When no state is hit, it loads the weather list.
   *
   */
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'components/menu/menu.html',
          controller: 'MenuController'
        })

        .state('app.locations', {
          url: '/locations',
          views: {
            'menuContent': {
              templateUrl: 'components/locations/locations.html',
              controller: 'LocationsController'
            }
          }
        })

        .state('app.about', {
          url: '/about',
          views: {
            'menuContent': {
              templateUrl: 'components/about/about.html',
              controller: 'AboutController'
            }
          }
        })

        .state('app.weatherlist', {
          url: '/weatherlist',
          views: {
            'menuContent': {
              templateUrl: 'components/weatherlist/weatherlist.html',
              controller: 'WeatherlistController'
            }
          }
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/weatherlist');
    });
})();
