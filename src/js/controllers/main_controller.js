angular.module('MyOregon.controllers.Main', [])
    .controller('MainController', ['$scope', 'ServiceRidb', function ($scope, ServiceRidb) {
        console.log('im the main controller');
    }]).controller('OrgController', ['$scope', 'ServiceRidb', '$http', function ($scope, sServiceRidb, $http) {

        //var theLists = this;
        //  $scope.recarealist =[];
        // theLists.service = ServiceRidb();
        //console.log('serviece', theLists.service);
        //$scope.recarealist = theLists.service.getRecModel();
        //$http.get('https://ridb.recreation.gov/api/v1/recareas.json/?state=or&full&apikey=7FD5B3CDAE7245BF8B955752E865CEC4').success(function(data){}).error(function(data){});
        // console.log('Im an gorg');
        console.log('I am in the Org Controller');
    }])
    .controller('CampController', ['ServiceRidb', '$http', '$scope', '$log', function (ServiceRidb, $http, $scope, $log) {
        var theLists = this;

        //$log.debug('service', ServiceRidb.getCampModel());
        ServiceRidb.getCampModel().then(
            function (data) {
            $log.debug('contdatat',data.data.RECDATA);
                $scope.campsites = data.data.RECDATA;
            }, function (error) {

            });
        //$log.debug($scope.campsites);
        //console.log('what the hell'); 
        //$scope.recarealist = theLists.service.getCampModel();
        //console.log('Im an gorg');

        //$log.debug('service', theLists.service);

    }]);
