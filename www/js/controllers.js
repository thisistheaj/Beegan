angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

  .controller('PlaylistsCtrl', function ($scope, $stateParams, $http) {

    $scope.listType = "";
    $scope.breweries = [];
    $scope.listType = $stateParams.listType;

    $http({
      method: 'GET',
      url: 'http://www.barnivore.com/' + $scope.listType + '.json'
    }).then(function (response) {
      $scope.breweries = response.data;

    }, function (error) {
      alert('error');
    });

  })


  .controller('PlaylistCtrl', function ($scope, $stateParams, $http) {

    $scope.company = {
      company_name: $stateParams.name,
      products: []
    };

    $http({
      method: 'GET',
      url: 'http://www.barnivore.com/company/' + $stateParams.id + '.json'
    }).then(function (response) {
      $scope.company = response.data.company;

    }, function (error) {
      alert('error');
    });

  });
