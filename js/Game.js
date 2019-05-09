/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases(phrases) {
        this.phrases = [new Phrase(phrases[0]), new Phrase(phrases[1]), new Phrase(phrases[2]), new Phrase(phrases[3]), new Phrase(phrases[4])];
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin() {
        for (var listItem = 0; listItem < document.getElementById('phrase').getElementsByTagName('li').length; listItem += 1) {
            if (document.getElementById('phrase').getElementsByTagName('li')[listItem].className.split(' ')[0] === 'hide') {
                return false;
            }
        }
        return true;
    }

    removeLife() {
        var scoreboard = document.getElementById('scoreboard');
        scoreboard.getElementsByTagName('ol')[0].removeChild(scoreboard.getElementsByTagName('li')[0]);
        scoreboard.getElementsByTagName('ol')[0].innerHTML += '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
        this.missed += 1;
        if (this.missed >= 5) {
            this.gameOver(false);
        }
    }

    gameOver(gameWon) {
        document.getElementById('overlay').style.display = 'flex';
        if (gameWon) {
            document.getElementById('game-over-message').innerHTML = "You Win!"
            document.getElementById('overlay').className = 'win';
        } else {
            document.getElementById('game-over-message').innerHTML = "You Lose!"
            document.getElementById('overlay').className = 'lose';

        }
        let buttons = document.getElementsByTagName('button');
        for (var i = 1; i < buttons.length; i += 1) {
            buttons[i].className = 'key';
            buttons[i].disabled = false;
        }
        var scoreboard = document.getElementById('scoreboard');
        for (var i = 0; i < 5; i += 1) {
            scoreboard.getElementsByTagName('ol')[0].removeChild(scoreboard.getElementsByTagName('li')[0]);
        }
        for (var i = 0; i < 5; i += 1) {
            scoreboard.getElementsByTagName('ol')[0].innerHTML += '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>';
        }
    }
 
    handleInteractions(key) {
        const buttons = document.getElementsByTagName('button');
        var i = 1;
        while (i < buttons.length) {
            if (buttons[i].textContent === key) {
                buttons[i].disabled = true;
                break;
            }
            i += 1;
        }
        if (game.activePhrase.checkLetter(key)) {
            buttons[i].className = 'key chosen';
            game.activePhrase.showMatchedLetter(buttons[i].textContent);
            if (game.checkForWin()) {
                game.gameOver(true);
            }
        } else {
            if (buttons[i].className != 'key wrong') {
                buttons[i].className = 'key wrong';
                game.removeLife();
            }

        }
    }
}