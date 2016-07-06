'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.main',
        'myApp.stories',
        'myApp.projects',
        'myApp.courses',
        'myApp.helper',
        'myApp.version',
        'angular-carousel',
        'ui.bootstrap',
        'ngMaterial'
    ])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        // $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/main'});
        // header.setTitle();

    }])


;
