
app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', 'PATH', function ($locationProvider, $stateProvider, $urlRouterProvider, PATH) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider

     // HOME STATES AND NESTED VIEWS ========================================
     .state('Category', {
         url: '/Category',
         templateUrl: PATH + 'Partial_CategoryListing.html',
    
     })
    .state('Forum', {
        url: '/Forum',
        templateUrl: PATH + 'Partial_Forum.html'
    })    
}]);