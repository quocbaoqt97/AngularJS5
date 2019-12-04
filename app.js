( function () {
  'use strict';
  angular.module('webapp',[])
  .controller('webappcontroller',webappcontroller);
  webappcontroller.$inject=['$scope'];
  function webappcontroller($scope){
    $scope.onceCounter=0;
    $scope.counter = 0;
    $scope.counter1 = 0;
    $scope.shownumberofwatcher = function(){
      console.log("# of watchers:",$scope.$$watchersCount);
    };
    $scope.upCounter = function(){
      $scope.counter++;
    };
    $scope.upCounter1 = function(){
      $scope.counter1++;
    };
    $scope.$watch(function(){
      console.log("Digest !!!!!");
    });
    // $scope.$watch('counter1',function(newvalue,oldvalue){
    //   console.log("old value:",oldvalue);
    //   console.log("new value:",newvalue);
    // });
  }


})();
