(function () {
    'use strict';
    angular.module('weatherapp.about', ['ionic','ngCordova'])
        .controller('AboutController', function ($scope, $ionicPlatform,$cordovaAppVersion) {
            $ionicPlatform.ready(function() {
                $cordovaAppVersion.getAppVersion().then(function (version) {
                    $scope.appVersion=version;
                });
                var deviceInformation = ionic.Platform.device();
                $scope.platform='n.a.';
                $scope.version='n.a.';
                $scope.manufacturer='n.a.';
                $scope.model='n.a.';
                if (deviceInformation.available === true) {
                    $scope.platform=deviceInformation.platform;
                    $scope.version=deviceInformation.version;
                    $scope.manufacturer=deviceInformation.manufacturer.charAt(0).toUpperCase() + deviceInformation.manufacturer.slice(1);
                    $scope.model=deviceInformation.model;
                }
            });


            $scope.author={
                name: 'Sascha Sambale',
                email: 'mastixmc@gmail.com',
                url: 'http://goo.gl/yduShl'
            };
        });
})();