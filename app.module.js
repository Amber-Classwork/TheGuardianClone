let app = angular.module("theGuardian",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "views/news.html",
        controller:"newsController",
    })
    .when("/opinions",{
        templateUrl: "views/opinions.html",
        controller:"opinionsController",
    })
    .when("/sports",{
        templateUrl: "views/sports.html"
    })
    .otherwise({redirectTo:"views/news.html"})
}])
app.controller("mainController",["$scope","$document",function($scope){
    $scope.content = false;
    console.log($scope.content)

    $scope.more = function ($event) {
        $scope.content = !$scope.content;
        console.log($scope.content)
        console.log(angular.element($event.target).find("i"))
        

    }
    $scope.search = false;
    $scope.drop = function () {
        $scope.search = !$scope.search;
    }
    $scope.dropdown = false;
    $scope.down = function () {
        $scope.dropdown = !$scope.dropdown;
    }




}])



