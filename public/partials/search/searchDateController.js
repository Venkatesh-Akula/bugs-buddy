/**
 * Created by pavap on 05/17/2016.
 */

angular.module('issueTracker')
    .controller('searchDateCtrl',['$scope', '$window', 'httpService',  function($scope, $window, httpService) {
        $scope.data = {};
        $scope.searchByDate = function(dateObj){
            $("#loader").show();
            var url = "/api/search/search-range";

            httpService.callRestApi(dateObj, url, "POST")
                .then(function(response){

                    if(response.data.length > 0) {
                        $("#loader").hide();

                        $scope.data  = response.data;

                        $scope.dateRangeResult = true;
                    }else{
                        $("#loader").hide();
                        $scope.data = null;
                        $("#danger-alert").show();
                    }
                } ,
                function(reason){
                    $("#loader").hide();
                    alert("Internal Server Error");

                });
        }


    }]);
