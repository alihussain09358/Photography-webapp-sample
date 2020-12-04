var photowiki=angular.module("photowiki",["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    .when("/",{
      templateUrl: "views/home.html"
    })
    .when("/blogs",{
      templateUrl: "views/blogs.html"
    })
    .when("/contactUs",{
        templateUrl:"views/contactUs.html"
    }).otherwise({
      redirectTo:"/"
    })
});

