
// console.log('hello')

var app = angular.module("app", ['ngRoute']).
  config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when("/", { 
          template: "<div></div>",
          controller: function(){
              window.location.replace('/portfolio')
          } 
        }).
      otherwise( { redirectTo: "/portfolio" });
})



;