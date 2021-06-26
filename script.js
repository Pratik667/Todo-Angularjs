var myApp = angular.module("myList",[]);
myApp.controller("myListController",function($scope){
    // $scope.items = ["Angularjs","React JS","minsjs"];
    $scope.newItem = "";
    $scope.pushItem = function(){
        if($scope.newItem != ""){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    }
    $scope.deleteItem = function(index){
        $scope.items.splice(index,1);
    }
});