/**
 * Created by pavap on 05/17/2016.
 */

angular.module('issueTracker')
    .controller('searchAppCtrl',['$scope', '$window', 'httpService',  function($scope, $window, httpService) {
        $scope.data = {};
        $scope.searchByAppln = function(app){

            if(app == undefined) {
                alert("Please select an application.");
            }else{
                $("#loader").show();
                var url = "/api/search/search-application";

                httpService.callRestApi({application: app}, url, "POST")
                    .then(function (response) {

                        if (response.data.length > 0) {
                            $("#loader").hide();
                            $scope.data = response.data;
                            $scope.searchApplnResult = true;
                        } else {
                            $("#loader").hide();
                            $scope.data = null;
                            $("#danger-alert").show();
                        }
                    },
                    function (reason) {
                        $("#loader").hide();
                        alert("Internal Server Error");

                    });
            }
        }
    }]);