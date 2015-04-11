angular.module('MyOregon', [
  'ngRoute',
  'mobile-angular-ui',
  'MyOregon.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});