angular.module('MyOregon.controllers.Main', [])
    .controller('MainController', ['ServiceRidb', function ($scope, ServiceRidb) {


    }])
    .controller('OrgController', ['ServiceRidb', '$http', function ($scope, ServiceRidb, $http) {
        var theLists = this;
        $scope.recarealist =[];
        theLists.service = ServiceRidb();
        console.log('serviece', theLists.service);
        $scope.recarealist = theLists.service.getRecModel();
        //$http.get('https://ridb.recreation.gov/api/v1/recareas.json/?state=or&full&apikey=7FD5B3CDAE7245BF8B955752E865CEC4').success(function(data){}).error(function(data){});

        console.log('Im an gorg');

    }])
    .controller('CampController', ['ServiceRidb', '$http', function ($scope, ServiceRidb, $http) {
        var theLists = this;
        $scope.camplist;
        theLists.service = ServiceRidb();
        console.log('serviece', theLists.service);
        $scope.recarealist = theLists.service.getCampModel();

        console.log('Im an gorg');

    }]);

