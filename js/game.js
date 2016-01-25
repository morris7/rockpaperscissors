var OVO = OVO || {};

OVO.Game = (function(){


    var Game = function(){
        this.userScore;
        this.computerScore;
        this.actions = [];
        this.init();
    }

    Game.prototype = {

        init: function(){
            this.bindUI();
            this.bindEvents();
        },

        bindUI: function(){
            this.actions = document.getElementsByTagName('img');
            this.winEl = document.getElementById('win');
            this.loseEl = document.getElementById('lose');
            this.drawEl = document.getElementById('draw');
        },

        bindEvents: function(){
            var self = this;

            this.actions[0].addEventListener("click", function(){self.startChallenge(this)});
            this.actions[1].addEventListener("click", function(){self.startChallenge(this)});
            this.actions[2].addEventListener("click", function(){self.startChallenge(this)});

        },

        startChallenge: function(el){
            var user = el.getAttribute('data-action'),
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
                this.drawEl.setAttribute('class','slideInDown');
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

