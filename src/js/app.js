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
        $routeProvider.when('/recareas', {templateUrl: 'organizations.html', reloadOnSearch: false,controller:'OrgController'});
        $routeProvider.when('#/recreation', {templateUrl: 'recreations.html', reloadOnSearch: false});
        $routeProvider.when('#/facilities', {templateUrl: 'facilities.html', reloadOnSearch: false});
        $routeProvider.when('#/campsites', {templateUrl: 'campsites.html', reloadOnSearch: false,controller:'CampController'});


    });
