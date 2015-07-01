(function () {
    'use strict';
    angular.module('weatherapp.about', ['ionic', 'ngCordova'])
        .controller('AboutController', ['$scope', '$cordovaAppVersion', AboutCtrl]);

    function AboutCtrl($scope, $cordovaAppVersion) {
        ionic.Platform.ready(function () {
            $cordovaAppVersion.getAppVersion().then(function (version) {
                $scope.app = {
                    version: version
                };
            });
        });

        var deviceInformation = ionic.Platform.device();

        $scope.deviceInformation = {
            platform: 'n.a.',
            version: 'n.a.',
            manufacturer: 'n.a.',
            model: 'n.a.'
        };

        if (deviceInformation.available === true) {
            $scope.deviceInformation.platform = deviceInformation.platform;
            $scope.deviceInformation.version = deviceInformation.version;
            $scope.deviceInformation.manufacturer = deviceInformation.manufacturer.charAt(0).toUpperCase() + deviceInformation.manufacturer.slice(1);
            $scope.deviceInformation.model = deviceInformation.model;
        }

        $scope.author = {
            name: 'Sascha Sambale',
            email: 'mastixmc@gmail.com',
            url: 'http://goo.gl/yduShl'
        };
    }
})
();