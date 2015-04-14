angular.module('MyOregon.controllers.Main', []) .controller('MainController', ['ServiceRidb', function ($scope, ServiceRidb) { 
    console.log('im the main controller');
    
    }]) .controller('OrgController', ['ServiceRidb','$http',function (ServiceRidb, $http) {
        
    //var theLists = this;
      //  $scope.recarealist =[];
       // theLists.service = ServiceRidb();
        //console.log('serviece', theLists.service);
        //$scope.recarealist = theLists.service.getRecModel();
        //$http.get('https://ridb.recreation.gov/api/v1/recareas.json/?state=or&full&apikey=7FD5B3CDAE7245BF8B955752E865CEC4').success(function(data){}).error(function(data){});
       // console.log('Im an gorg');
    //console.log('I am in the Org Controller');
    }])
    .controller('CampController', ['ServiceRidb', '$http','$scope', function (ServiceRidb, $http,$scope) {
        var theLists = this;
        $scope.campsites = ['happy','sad','hungry','high'];
        theLists.service = new ServiceRidb();
        //console.log('what the hell'); 
        $scope.recarealist = theLists.service.getCampModel(); 
        //console.log('Im an gorg');

       /console.log('serviece', theLists.service); 

    }]);
