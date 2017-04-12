app.service('categoryService', categoryService);
categoryService.$inject = ['$http', '$q' ];

function categoryService($http, $q) {

    var urlBase = 'http://localhost:53758/api/category';

    this.getcategories = function () {
        return $http.get(urlBase);
    };
    this.getcategory = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    this.insertOrUpdateCategory = function (cust) {
        return $http.post(urlBase, cust);
    };
    this.deleteCategory = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    

}