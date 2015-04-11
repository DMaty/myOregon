angular.module('MyOregon.services', ['ngLodash']).service('serviceRidb', ['$scope','Restangular','lodash',function($scope,Restangular,lodash){
  thisObj = this;
  thisObj.baseUrl='https://ridb.recreation.gov/api/v1/';
  thisObj.organizations = Restangular.allUrl('organizations ', thisObj.baseUrl + 'organizations.json');
  thisObj.recreations = Restangular.allUrl('recreations ', thisObj.baseUrl + 'recareas.json');
  thisObj.facilities = Restangular.allUrl('facilities ', thisObj.baseUrl + 'facilities.json');
  thisObj.campsites = Restangular.allUrl('capsites ', thisObj.baseUrl + 'campsites.json');
  
  
  
  
  
}]);
