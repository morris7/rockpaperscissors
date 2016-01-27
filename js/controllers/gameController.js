/*
 * Created by sam morris on 27/01/2016.
 */

app.controller('GameController',['$scope', function($scope){

    $scope.userScore = 0;
    $scope.computerScore = 0;
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



    $scope.startChallenge = function(action){
        var comp = $scope.getComputerSelection();
        var 


    };


    $scope.getComputerSelection = function(){
        var rand = Math.random()* 3,
            result = '',
            actionModel = {}

        if(rand > 2){
            result = 'rock';
        } else if(rand > 1){
            result = 'paper';
        } else {
            result = 'scissors';
        }

        actionModel = getModel(result);
        actionModel.comp = true;

        //$scope.compAction = result;

        return result;

    };

    $scope.getModel = function(action){

        var action = $scope.actions.filter(function(obj){
            return obj.name == result
        });

        return action[0];

    }




}]);