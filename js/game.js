var OVO = OVO || {};

OVO.Game = (function(){


    var Game = function(){

        this.userSelection = '';
        this.computerSelection = '';
    }

    Game.prototype = {

        bindUI: function(){



        },

        getComputerSelection: function(){
            var rand = Math.random()* 3,
                result = '';

            if(rand > 2){
                result = 'rock';
            } else if(rand > 1){
                result = 'paper';
            } else {
                result = 'scissors';
            }

            return result;

        }

    }

    Game.prototype.constructor = Game;

    return Game;


})();


var game = new OVO.Game();

