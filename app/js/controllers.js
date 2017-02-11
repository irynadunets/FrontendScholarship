angular.module('raControllers', [])  
.controller('MyCtrl1',  function($scope,Scholarship) { 
$scope.allscholarship = Scholarship.findAll();
});


