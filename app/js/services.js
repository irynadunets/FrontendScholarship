var Services = angular.module('raServices', ['ngResource']);  
Services.factory("Scholarship",function($resource){  
return $resource('http://localhost:8080/scholarship/webresources/scholarship.scholarship', {},{
findAll:{method:'GET', isArray:true}
});     
});

