angular.module('MyOregon', [
    'ngRoute',
    'mobile-angular-ui',
    'MyOregon.controllers.Main',
    'MyOregon.services',
    'ngLodash',
    'restangular'
])

    .config(function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
        $routeProvider.when('/organization', {templateUrl: 'organizations.html', reloadOnSearch: false});
        $routeProvider.when('/recreatoins', {templateUrl: 'recreations.html', reloadOnSearch: false});
        $routeProvider.when('/facilities', {templateUrl: 'facilities.html', reloadOnSearch: false});
        $routeProvider.when('/campsitess', {templateUrl: 'campsites.html', reloadOnSearch: false});


    });
