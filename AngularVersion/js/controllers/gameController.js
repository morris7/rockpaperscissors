/*
 * Created by sam morris on 27/01/2016.
 */

app.controller('GameController',['$scope', '$timeout', function($scope, $timeout){

    $scope.userScore = 0;
    $scope.computerScore = 0;
    $scope.gameResult = '';
    $scope.actions = [
            {
                "name": "rock",
                "selected": false,
                "comp":false
            },
            {
                "name": "paper",
                "selected": false,
                "comp":false
            },
            {
                "name": "scissors",
                "selected": false,
                "comp":false
            }
        ];


    $scope.initialData = angular.copy($scope.actions);


    $scope.startChallenge = function(action){
        var comp = $scope.getComputerSelection(),
            actionModel = $scope.getModel(action);

        actionModel.selected = true;

        $scope.determineVictory(action, comp);
        $timeout(function(){ $scope.reset()}, 2500);

    };


    $scope.getComputerSelection = function(){
        var rand = Math.random()* 3,
            result = '',
            actionModel = {};

        if(rand > 2){
            result = 'rock';
        } else if(rand > 1){
            result = 'paper';
        } else {
            result = 'scissors';
        }

        actionModel = $scope.getModel(result);
        actionModel.comp = true;

        return result;

    };


    $scope.determineVictory = function(user, comp){

        var result = '';

        if(user === comp){

            $scope.gameResult = 'draw';

        } else {

            if (user === 'rock') {
                if(comp === 'paper'){
                    result = 'lose';
                } else {
                    result = 'win';
                }

            } else if (user === 'paper') {

                if(comp === 'scissors'){
                    result = 'lose';
                } else {
                    result = 'win';
                }

            } else if (user === 'scissors'){

                if(comp === 'rock'){
                    result = 'lose';
                } else {
                    result = 'win';
                }

            }

            if(result === 'win'){

                $scope.gameResult = 'win';
                $scope.userScore++;

            } else {

                $scope.gameResult = 'lose';
                $scope.computerScore++;

            }

        }
    };

    $scope.getModel = function(action){

        var action = $scope.actions.filter(function(obj){
            return obj.name == action;
        });

        return action[0];

    };

    $scope.reset = function(){

        $scope.actions = angular.copy($scope.initialData);
        $scope.gameResult = '';
        console.log($scope.actions);

    }


}]);