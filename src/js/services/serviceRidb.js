angular.module('MyOregon.services', ['ngLodash']).factory('ServiceRidb', ['Restangular', 'lodash', '$http', function (Restangular, lodash, $http) {
    var ribservice = function () {
        //Restangular.setDefaultRequestParams({apikey: "7FD5B3CDAE7245BF8B955752E865CEC4"});
        thisObj = this;
        thisObj.qparams = "?state=or&full&apikey=7FD5B3CDAE7245BF8B955752E865CEC4";
        thisObj.baseUrl = 'https://ridb.recreation.gov/api/v1/';
        var orgs = thisObj.baseUrl + 'organizations.json' + thisObj.qparams;
    
        $http.get('/data/campsitesFull.json').
        success(function (data, status, headers, config) {
            thisObj.campsites = data.RECDATA;
            console.log('compsites',data.RECDATA);
            })
        .error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('callerrro', error);
                thisObj.campsites = [];
                
                Restangular.allUrl('recreations ', thisObj.baseUrl + 'recareas.json' + thisObj.qparams).customGETLIST().then(
                function(data){
                    console.log('restangular');
                    
                    },
                function(error){});


        });
      //      });
        
        Restangular.allUrl('recreations ', thisObj.baseUrl + 'recareas.json' + thisObj.qparams);
       // thisObj.facilities = Restangular.allUrl('facilities ', thisObj.baseUrl + 'facilities.json' + thisObj.qparams);
       // thisObj.campsites = Restangular.allUrl('capsites ', thisObj.baseUrl + 'campsites.json' + thisObj.qparams);


    };
    ribservice.prototype.getRecModel = function () {
        var self = this;
        //return thisObj.recareas;
        return [1,2,3,4];
    };
    ribservice.prototype.getCampModel = function () {
        var self = this;
        return thisObj.campsites;
    };

    return ribservice;
}]);
