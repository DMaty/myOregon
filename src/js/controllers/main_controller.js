angular.module('MyOregon.controllers.Main', [])
    .controller('MainController', ['ServiceRidb', function ($scope, ServiceRidb) {

    }])
    .controller('OrgController', ['ServiceRidb', '$http', function ($scope, ServiceRidb, $http) {
        var theLists = this;
        $scope.recarealist;
        theLists.service = ServiceRidb();
        console.log('serviece', theLists.service);
        $scope.recarealist = theLists.service.getRecModel();

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

