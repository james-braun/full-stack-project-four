/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        var letterArray = this.phrase.split('');
        var listElements = '<ul>';
        for (var i = 0; i < letterArray.length; i += 1) {
            if (letterArray[i] === ' ') {
                listElements += '<li class="space"> </li>';
            } else {
                listElements += '<li class="hide letter ' + letterArray[i] + '">' + letterArray[i] + '</li>';
            }
        }
        listElements += '</ul>';
        document.getElementById('phrase').innerHTML = listElements;
    }

    checkLetter(letter) {
        for (var listItem in document.getElementById('phrase').getElementsByTagName('li')) {
            if (letter === document.getElementById('phrase').getElementsByTagName('li')[listItem].innerHTML) {
                return true;
            }
        }
        return false;
    }

    showMatchedLetter(letter) {
        var matchElement = document.getElementById('phrase').getElementsByTagName('li');
        for (var listItem = 0; listItem < matchElement.length; listItem += 1) {
            if (letter === matchElement[listItem].innerHTML) {
                matchElement[listItem].className = 'show letter ' + letter;
            }
        }
    }
}