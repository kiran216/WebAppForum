app.service('forumService', forumService);
forumService.$inject = ['$http', '$q'];

function forumService($http, $q) {

    var urlBase = 'http://localhost:53758/api/Forum';

    this.getForums = function () {
        return $http.get(urlBase);
    };
    this.getForum = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    this.insertOrUpdateForum = function (forum) {
        return $http.post(urlBase, forum);
    };
    this.deleteForum = function (id) {
        return $http.delete(urlBase + '/' + id);
    };   

}