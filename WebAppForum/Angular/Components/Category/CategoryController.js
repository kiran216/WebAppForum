app.controller("category", ['$scope', 'categoryService','commonService',
function category($scope, categoryService,commonService) {
    debugger;
    $scope.status;
    $scope.CategoriesList;
    $scope.mySelections = [];
    $scope.currentCategoryDetails = {};
    $scope.gridOptions = {
        data: 'CategoriesList',
        selectedItems: $scope.mySelections,
        afterSelectionChange: function () {
            $scope.openUpdateCategoryForm();
        },
        enableSorting: true,
        enableFilter: true,
        multiSelect: false
    };

    categoryService.getcategories()
        .then(function (response) {
            $scope.CategoriesList = response.data;
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });

    //Open Add Category Form
    $scope.openAddCategoryForm = function () {
        commonService.showAddForm('add-edit-main');
        $scope.currentCategoryDetails = {};
    };
    //Populate the data of Selected Category
    $scope.openUpdateCategoryForm = function () {
        $scope.currentCategoryDetails = {};
        $scope.currentCategoryDetails = $scope.mySelections[0]; //selected row data        
        commonService.showEditForm('add-edit-main');
    };
    $scope.insertCategory = function () {
        categoryService.insertOrUpdateCategory($scope.currentCategoryDetails).then(function (response) {
            $scope.resetPage();
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });
    }
    $scope.resetPage = function () {
        commonService.resetPage('add-edit-main');
        categoryService.getcategories()
       .then(function (response) {
           $scope.CategoriesList = response.data;
       }, function (error) {
           $scope.status = 'Unable to load Category data: ' + error.message;
       });
    }
    $scope.DeleteCategory = function () {
        categoryService.deleteCategory($scope.currentCategoryDetails.CategoryId).then(function (response) {
            $scope.resetPage();
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });
    }

}]);
