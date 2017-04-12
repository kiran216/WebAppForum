app.service('commonService', commonService);
commonService.$inject = ['$http', '$q', '$window', '$compile'];
function commonService($http, $q, $window, $compile) {
    this.showAddForm = function (elementId) {
        $("." + elementId + "").show();
        $(".edit-content").slideUp("slow");
        $(".add-content").slideDown("slow");
        this.focusToElement(elementId);
    };
    this.showEditForm = function (elementId) {
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