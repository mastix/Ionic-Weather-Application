(function () {
    'use strict';
    angular.module('weatherapp', ['ionic', 'weatherapp.menu', 'weatherapp.locations', 'weatherapp.weatherlist','weatherapp.about'])
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
