/*
 * Created by sam morris on 27/01/2016.
 */


var app = angular.module('app', []);

app.directive('gameAction', function(){
    return {
        restrict: 'E',
        templateUrl:'directives/action.html'
    };
}).directive('gameResult', function(){
    return {
        restrict: 'E',
        templateUrl:'directives/result.html'
    };
})