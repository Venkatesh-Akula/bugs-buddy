angular.module('issueTracker', ['ngResource', 'ngRoute', 'datatables'])

.config(function($routeProvider, $locationProvider) {


  $locationProvider.html5Mode(true);
  $routeProvider
      .when('/', { templateUrl: '/partials/main/dashboard'})
      .when('/new-incident/', { templateUrl: '/partials/incident/new-incident'})
      .when('/search-incident/', { templateUrl: '/partials/search/search-incident'})
      .when('/search-date/', { templateUrl: '/partials/search/search-date'})
      .when('/search-app/', { templateUrl: '/partials/search/search-application'})
      .when('/dropdown-table/', { templateUrl: '/partials/main/dashboard'})
      .when('/oops/', { templateUrl: '/partials/error/error'})
      .when('/incident-detail/:incidentID/', { templateUrl: function(params){ return '/partials/incident/incident-detail/' + params.incidentID; }})
      .otherwise({  
        templateUrl: '/damn-it/'
      });
      

})

.controller('indexCtrl', ['$scope', '$location', function($scope, $location){

  $scope.isActive = function(viewLocation){

    return viewLocation === $location.path();
  }

}])


