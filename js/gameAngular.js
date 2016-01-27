/*
 * Created by sam morris on 27/01/2016.
 */


var app = angular.module('app', []);

app.directive('action', function(){
    return {
        restrict: 'E',
        templateUrl:'directives/action.html'

    };
});