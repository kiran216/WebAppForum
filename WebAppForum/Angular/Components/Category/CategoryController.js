app.controller("category", ['$scope',  'categoryService', 
function category($scope, categoryService) {
    debugger;
    $scope.status;
    $scope.CategoriesList;
    categoryService.getcategories()
            .then(function (response) {
                $scope.CategoriesList = response.data;
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    $scope.gridOptions = { data: 'CategoriesList' };
    $scope.message = 'test';
}]);
