(function(){
  'use strict';

  var app = angular.module('LunchCheck',[]);


  app.controller("Ctrlr",['$scope',Ctrlr]);


  function Ctrlr($scope){

    $scope.menu_list = "";

    $scope.btnClick = function(){
      var list = $scope.menu_list;
      if(list === undefined || list === ""){
        $scope.message = "Please enter data first";
        $scope.color = "fail";
        return;
      }

      var items= list.split(",");

      //Check for empty items and avoid counting them
      var count = 0;
      for(var i in items){
        var item = items[i].trim();
        if(item !== ""){
          count++;
        }
      }

      if(count <= 3){
        $scope.message = "Enjoy!";
        $scope.color = "success";
        return;

      }else if(count > 3){
        $scope.message = "Too much!";
        $scope.color = "fail";
        return;
      }
    }
  };


})();
