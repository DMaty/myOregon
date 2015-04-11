angular.module('MyOregon.controllers.Main', [])
    .controller('MainController', ['serviceRidb', function ($scope, serviceRidb) {

    }])
    .controller('OrgController', ['serviceRidb', function ($scope, serviceRidb) {

        serviceRibd.orgainizations.get_list().then(
            function (data) {
                $log.debug(data);
            },
            function (error) {
                $log.debug(error);
            }
        )

    }]);
