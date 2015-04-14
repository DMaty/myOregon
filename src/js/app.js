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
        $routeProvider.when('/recareas', {
            templateUrl: 'organizations.html',
            reloadOnSearch: false,
            controller: 'OrgController'
        });
        $routeProvider.when('/campsites', {
            templateUrl: 'campsites.html',
            reloadOnSearch: false,
            controller: 'CampController'
        });


    });
