( function () {
  'use strict';
  angular.module('webapp',[])
  .controller('webappcontroller',webappcontroller);
  webappcontroller.$inject=['$scope','$timeout'];
  function webappcontroller($scope,$timeout){
    $scope.counter = 0;
    $scope.counter1 = 0;
    $scope.shownumberofwatcher = function(){
      console.log("# of watchers:",$scope.$$watchersCount);
    };
    // Use timeout with inject $timeout for timer
    // $scope.upCounter = function(){
    //   $timeout(function(){
    //     $scope.counter++;
    //     console.log("counter incremented!");
    //   },2000)
    // };
    // use apply or digest for timeout
    // $scope.upCounter = function(){
    //   $timeout(function(){
    //     $scope.counter++;
    //     console.log("counter incremented!");
    //   },2000)
    // };
    $scope.upCounter = function(){
      $timeout(function(){
        $scope.$apply(function(){
          $scope.counter++;
          console.log("counter incremented!");
        });
      },2000);
    };
    // $scope.upCounter1 = function(){
    //   $scope.counter1++;
    // };
    $scope.$watch(function(){
      console.log("Digest !!!!!");
    });
    // $scope.$watch('counter1',function(newvalue,oldvalue){
    //   console.log("old value:",oldvalue);
    //   console.log("new value:",newvalue);
    // });
  }


})();
