/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var game;

const phrases = ['there she blows', 'superman lives', 'dime for a fortyniner', 'i came too a conclusion', 'hugh hefner is god'];
document.getElementById('btn__reset').addEventListener('click', function () {
    game = new Game();
    game.createPhrases(phrases);
    game.startGame();
    document.getElementById('qwerty').addEventListener('click', function (event) {
        if (event.target.tagName === "BUTTON") {
            game.handleInteractions(event.target.textContent);
        }
    });
    document.addEventListener('keyup', function (event) {
        if (/[a-z]/.test(event.key)) {
            game.handleInteractions(event.key);
        }
    });
});

