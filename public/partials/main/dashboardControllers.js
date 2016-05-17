/**
 * Created by Pkp on 5/15/2016.
 */

angular.module('issueTracker')
    .controller('dashboardCtrl',['$scope', '$window', 'httpService', '$routeParams', '$filter',
        '$location', function($scope, $window, httpService, $routeParams, $filter, $location) {

            $scope.initProcess = function(){
                $scope.loadIncidentsTable();
                $scope.loadChangesTable();
                $scope.loadRfiTable();
                $scope.populateChangeTile();
                $scope.populateIncidentTile();
            }

            $scope.loadIncidentsTable = function(){

                var url = "/api/dashboard/incidents";
                $scope.data = {};
                httpService.callRestApi(null, url, "GET")
                    .then(function(response){

                            $scope.data = response.data;

                    } ,
                    function(reason){

                        $location.path('/oops/');
                    });
            }

            $scope.loadChangesTable = function(){

                var url = "/api/dashboard/changes";
                $scope.changes = {};
                httpService.callRestApi(null, url, "GET")
                    .then(function(response){


                        $scope.changes = response.data;

                    } ,
                    function(reason){

                        $location.path('/oops/');
                    });
            }

            $scope.loadRfiTable = function(){

                var url = "/api/dashboard/requests";
                $scope.rfi = {};
                httpService.callRestApi(null, url, "GET")
                    .then(function(response){


                        $scope.rfi = response.data;

                    } ,
                    function(reason){

                        $location.path('/oops/');
                    });
            }

            $scope.populateIncidentTile = function(){

                var url = "/api/dashboard/incidents-month";
                httpService.callRestApi(null, url, "GET")
                    .then(function(response){

                        $scope.incidentCount = response.data.length;

                    } ,
                    function(reason){

                    });

            }

            $scope.populateChangeTile = function(){

                var url = "/api/dashboard/changes-month";
                httpService.callRestApi(null, url, "GET")
                    .then(function(response){

                        $scope.changeCount = response.data.length;

                    } ,
                    function(reason){

                    });

            }




        }]);
