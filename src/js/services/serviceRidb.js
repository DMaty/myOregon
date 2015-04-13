angular.module('MyOregon.services', ['ngLodash']).factory('ServiceRidb', ['Restangular', 'lodash', '$http', function (Restangular, lodash, $http) {
    var ribservice = function () {
        //s                     Restangular.setDefaultRequestParams({apikey: "7FD5B3CDAE7245BF8B955752E865CEC4"});
        thisObj = this;
        console.log('ra', Restangular);
        thisObj.qparams = "?state=or&full&apikey=7FD5B3CDAE7245BF8B955752E865CEC4";
        thisObj.baseUrl = 'https://ridb.recreation.gov/api/v1/';
        console.log(thisObj.baseUrl + 'organizations.json');
        var orgs = thisObj.baseUrl + 'organizations.json' + thisObj.qparams;
        console.log('orgs',orgs);
        $http.get(orgs).success(function (data, status, headers, config) {thisObj.recareas = data.RECDATA;}).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('callerrro', error);
                thisObj.recareas = [];
            });
        
        //thisObj.recreations = Restangular.allUrl('recreations ', thisObj.baseUrl + 'recareas.json' + thisObj.qparams);
       // thisObj.facilities = Restangular.allUrl('facilities ', thisObj.baseUrl + 'facilities.json' + thisObj.qparams);
       // thisObj.campsites = Restangular.allUrl('capsites ', thisObj.baseUrl + 'campsites.json' + thisObj.qparams);


    };
    ribservice.prototype.getRecModel = function () {
        var self = this;
        return thisObj.recareas;
    };

    return ribservice;
}]);
