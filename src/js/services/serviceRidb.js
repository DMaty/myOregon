angular.module('MyOregon.services', ['ngLodash']).factory('ServiceRidb', ['Restangular', 'lodash', '$http', '$log', function (Restangular, lodash, $http, $log) {
    thisObj = this;
    thisObj.qparams = "?state=or&full&apikey=7FD5B3CDAE7245BF8B955752E865CEC4";
    thisObj.baseUrl = 'https://ridb.recreation.gov/api/v1/';
    return {
        getCampModel: function () {
            var promise = $http.get(thisObj.baseUrl + 'campsites.json' + thisObj.qparams).then(function (response) {
                // The then function here is an opportunity to modify the response
                //ssconsole.log(response);
                // The return value gets picked up by the then in the controller.
                return response;
            });
            return promise;
        }
    };


}]);
