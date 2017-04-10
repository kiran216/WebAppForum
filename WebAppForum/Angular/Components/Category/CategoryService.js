app.service('categoryService', categoryService);
categoryService.$inject = ['$http', '$q' ];

function categoryService($http, $q) {

    var urlBase = '/api/categories';    

    this.getcategories = function () {
        return $http.get('http://localhost:53758/api/category');
    };
    this.getcategory = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    this.insertcategory = function (cust) {
        return $http.post(urlBase, cust);
    };

    this.updatecategory = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    this.deletecategory = function (id) {
        return $http.delete(urlBase + '/' + id);
    };


}