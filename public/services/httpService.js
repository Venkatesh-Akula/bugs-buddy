/**
 * Created by pavap on 05/12/2016.
 */

angular.module('issueTracker').factory('httpService', function($http, $q){

    return {

        callRestApi : function(payLoad, url, method){

            var dfd = $q.defer();
            $http({
                method: method,
                url: url,
                data: payLoad
            })
                .success(function(data, status, headers, config){
                    var response = {};
                    response.data = data;
                    response.status = status;
                    dfd.resolve(response);
                })
                .error(function (data, status, headers, config) {
                    dfd.reject(data);
                });

            return dfd.promise;
        }

    }


});
