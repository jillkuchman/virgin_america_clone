var test = angular.module('test', ['ui.router']);

test.config(function($stateProvider) {
    $stateProvider.state('home', {
        url:"",
        templateUrl: "partials/home.html",
        controller: 'DeparturesCtrl'
    });

    $stateProvider.state('blah', {
        url:"/blah",
        templateUrl: "partials/blah.html"
    });
});
