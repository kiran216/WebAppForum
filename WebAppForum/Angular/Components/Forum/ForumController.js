app.controller("forum", ['$scope', 'forumService', 'categoryService', 'commonService',
function category($scope, forumService, categoryService, commonService) {  
    $scope.CategoriesList;
    $scope.mySelections = [];
    $scope.forumsList;
    $scope.pagingOptions = {
        pageSizes: [10, 20, 50, 100],
        pageSize: 10,
        currentPage: 1
    };
    $scope.gridOptions = {
        data: 'forumsList',
        columnDefs: [
        { name: 'Forum ID', field: 'ForumId' },
        { name: 'Subject', field: 'Subject' },
        { name: 'Description', field: 'Description' },
        { name: 'Category Name', field: 'CategoryName' }
        ],
        selectedItems: $scope.mySelections,
        afterSelectionChange: function () {
            $scope.openUpdateForumForm();
        },
        enableSorting: true,
        enableFilter: true,
        multiSelect: false,
        enablePaging: true,
        showFooter: true,
        pagingOptions: $scope.pagingOptions,
        showFilter: true
    };

    categoryService.getcategories()
       .then(function (response) {
           $scope.CategoriesList = response.data;
       }, function (error) {
          console.log(error.message);
       });

    forumService.getForums()
        .then(function (response) {
            $scope.forumsList = response.data;
        }, function (error) {
            console.log(error.message);
        });


    $scope.resetPage = function () {
        commonService.resetPage('add-edit-main');
        forumService.getForums()
        .then(function (response) {
            $scope.forumsList = response.data;
        }, function (error) {
            console.log(error.message);
        });
    }
    //Open Add Category Form
    $scope.openAddForumForm = function () {
        commonService.showAddForm('add-edit-main');
        $scope.currentForumDetails = {};
    };
    //Populate the data of Selected Category forum
    $scope.openUpdateForumForm = function () {
        $scope.currentForumDetails = {};
        $scope.currentForumDetails = $scope.mySelections[0]; //selected row data 
        $scope.selectedOption = {};
        $scope.selectedOption.CategoryId = $scope.currentForumDetails.CategoryId
        $scope.selectedOption.CategoryName=   $scope.currentForumDetails.CategoryName;
        commonService.showEditForm('add-edit-main');
    };
    $scope.insertForum = function () {
        $scope.currentForumDetails.CategoryId = $scope.selectedOption.CategoryId;
        $scope.currentForumDetails.CategoryName = $scope.selectedOption.CategoryName;
        forumService.insertOrUpdateForum($scope.currentForumDetails).then(function (response) {
            $scope.resetPage();
        }, function (error) {
            console.log(error.message);
        });
    }
    $scope.DeleteForum = function () {
        forumService.deleteForum($scope.currentForumDetails.ForumId).then(function (response) {
            $scope.resetPage();
        }, function (error) {
            console.log(error.message);
        });
    }
}]);
