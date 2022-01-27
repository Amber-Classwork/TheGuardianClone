let app = angular.module('myApp', []);
app.controller('moreCtrl', function ($scope, $log) {
    $log.info($scope)
    $scope.content = false;
    console.log($scope.content)

    $scope.more = function () {
        $scope.content = !$scope.content;
        console.log($scope.content)
        $scope.content.style.transform = "rotate(180deg)"

    }

})

app.controller('searchCtrl', function ($scope) {
    $scope.search = false;
    $scope.drop = function () {
        $scope.search = !$scope.search;
    }

})

app.controller('dropCtrl', function ($scope) {
    $scope.dropdown = false;
    $scope.down = function () {
        $scope.dropdown = !$scope.dropdown;
    }

})