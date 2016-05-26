app.controller('mainCtr', function($scope, $location, $translate) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.message = 'Main';

    $scope.changeLanguage = function (key) {
        console.log(key);
        $translate.use(key);
    };
});