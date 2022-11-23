var app = angular.module('myApp',[]);

app.controller('MyController' , function($scope){
  $scope.name = "Tomiwa";
  $scope.compstudents = [
    {name:'Rex',color:'purple',networth:200000000},
    {name:'John',color:'brown',networth:20},
    {name:'Michael',color:'blue',networth:5000},
    {name:'Tomiwa',color:'green',networth:560000000000000000000n}
  ]
  $scope.calculate = function (){
    $scope.amount = ($scope.price * $scope.quantity) - (($scope.price * $scope.quantity)* ($scope.discount / 100)) 
  }
  // $scope.calculate = function (price , quantity , discount){
  //   $scope.amount = (price * quantity) - ((price * quantity)* (discount / 100)) 
  // }
});
// app.controller('MyController2' , function($scope){
//   $scope.name = "John";
// });
// app.controller('MyController3' , function($scope){
//   $scope.name = "Rex";
// });