var OVO = OVO || {};

OVO.Game = (function(){


    var Game = function(){
        this.score;
        this.init();
    }

    Game.prototype = {

        init: function(){
            this.bindUI();
        },

        bindUI: function(){
            var self = this,
                images = document.getElementsByTagName('img');

            images[0].addEventListener("click", function(){self.startChallenge(this)});
            images[1].addEventListener("click", function(){self.startChallenge(this)});
            images[2].addEventListener("click", function(){self.startChallenge(this)});


        },

        startChallenge: function(el){
            var user = el.getAttribute('data-move'),
                comp = this.getComputerSelection();

            el.className += " border";

            this.determineVictory(user, comp);
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

        },

        determineVictory: function(user, comp){
            if(user === comp){
                console.log(user, comp, 'draw');
            } else {
                console.log(user, comp);
                if (user === 'rock') {

                } else if (user === 'paper') {

                }
            }
        }

    }

    Game.prototype.constructor = Game;

    return Game;


})();


var game = new OVO.Game();

