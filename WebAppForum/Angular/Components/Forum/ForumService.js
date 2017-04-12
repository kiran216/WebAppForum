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

    this.showAddForumForm = function (elementId) {
        $("." + elementId + "").show();
        $(".edit-content").slideUp("slow");
        $(".add-content").slideDown("slow");
        this.focusToElement(elementId);
    };
    this.showEditForumForm = function (elementId) {
        $("." + elementId + "").show();
        $(".add-content").slideUp("slow");
        $(".edit-content").slideDown("slow");
        this.focusToElement(elementId);
    };
    this.focusToElement = function (elementId) {
        $('html, body').animate({ scrollTop: $('#' + elementId).position().top }, 'slow');
    };
    this.focusToTop = function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    };
    this.resetPage = function (elementId) {
        $(".add-content").slideUp("slow");
        $(".edit-content").slideUp("slow");
        $(".alert").hide();
        $(".modal-header.alert.alert-success").show();
        $("." + elementId + "").hide();
        this.focusToTop();
    };

}