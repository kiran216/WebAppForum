app.controller("forum", ['$scope', 'forumService', 'categoryService', 'commonService',
function category($scope, forumService,categoryService,commonService) {
    debugger;
    $scope.status;
    $scope.CategoriesList;
    $scope.mySelections = [];
    $scope.forumsList ;
    $scope.gridOptions = {
        data: 'forumsList',
        selectedItems: $scope.mySelections,
        afterSelectionChange: function () {
            $scope.openUpdateForumForm();
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

    forumService.getForums()
        .then(function (response) {
            $scope.forumsList = response.data;
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });

    
    $scope.resetPage = function () {
        commonService.resetPage('add-edit-main');
        forumService.getForums()
        .then(function (response) {
            $scope.forumsList = response.data;
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });
    }
    //Open Add Category Form
    $scope.openAddForumForm = function () {
        commonService.showAddForm('add-edit-main');
        $scope.currentForumDetails = {};
    };
    //Populate the data of Selected Category
    $scope.openUpdateForumForm = function () {
        $scope.currentForumDetails = {};
        $scope.currentForumDetails = $scope.mySelections[0]; //selected row data        
        commonService.showEditForm('add-edit-main');
    };
    $scope.insertForum = function () {
        $scope.currentForumDetails.CategoryId = $scope.selectedOption.CategoryId;
        $scope.currentForumDetails.CategoryName = $scope.selectedOption.CategoryName;
        forumService.insertOrUpdateForum($scope.currentForumDetails).then(function (response) {
            $scope.resetPage();
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });
    }
    $scope.DeleteForum = function () {
        forumService.deleteForum($scope.currentForumDetails.ForumId).then(function (response) {
            $scope.resetPage();
        }, function (error) {
            $scope.status = 'Unable to load Category data: ' + error.message;
        });
    }
}]);
