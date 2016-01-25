var OVO = OVO || {};

OVO.Game = (function(){


    var Game = function(){
        this.userScore = 0;
        this.computerScore = 0;
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
            this.userScoreEl = document.getElementById('userScore');
            this.computerScoreEl = document.getElementById('computerScore');
        },

        bindEvents: function(){
            var self = this;

            this.actions[0].addEventListener("click", function(){self.startChallenge(this)});
            this.actions[1].addEventListener("click", function(){self.startChallenge(this)});
            this.actions[2].addEventListener("click", function(){self.startChallenge(this)});

        },

        startChallenge: function(el){
            var self = this,
                user = el.getAttribute('data-action'),
                comp = this.getComputerSelection();

            el.className += " border";

            this.determineVictory(user, comp);
            setTimeout(function(){ self.resetGame(el)}, 2500);
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

            var result = '';

            if(user === comp){

                this.drawEl.setAttribute('class','draw');

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

                    this.winEl.setAttribute('class', 'win');
                    this.userScoreEl.innerHTML = ++this.userScore;

                } else {

                    this.loseEl.setAttribute('class', 'lose');
                    this.computerScoreEl.innerHTML = ++this.computerScore;

                }


                //console.log(user, comp);
            }
        },

        resetGame: function(el){

            el.setAttribute('class', '');
            this.winEl.setAttribute('class', 'hide');
            this.loseEl.setAttribute('class', 'hide');
            this.drawEl.setAttribute('class', 'hide');

        }

    }

    Game.prototype.constructor = Game;

    return Game;


})();


var game = new OVO.Game();

