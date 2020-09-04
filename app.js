"use strict";

console.log('js is loaded');

var name = 'What shall we call you?'; 
var name = prompt('What shall we call you?');

var score = 0;

alert('Great meeting you, ' + name);
console.log(name);
console.log('Great meeting you, ' + name);


var outdoors = prompt('Have I been outdoors today?');
    if (outdoors.toLowerCase() === 'yes') {
    alert('Great! Correct.');
} else if (outdoors.toLowerCase() === 'no') {
    alert('Oops! Incorrect.');
}


var kids = prompt('Do I have human children?');
    if (kids.toLowerCase() === 'yes') {
    alert('Absolutely. Correct.');
} else if (kids.toLowerCase() === 'no') {
    alert('Oops! Incorrect.');
}

var desert = prompt('Have I been to the desert?');
    if (desert.toLowerCase() === 'yes') {
        alert('Fantastic! Correct.');
} else if (desert.toLowerCase() === 'no') {
        alert('Darn. Incorrect.');
}

var sing = 'Do I like to sing?';
var sing = prompt('Do I like to sing?');
    if (sing.toLowerCase() === 'yes') {
        alert('Fabulous. Correct.'); 
    } else if (sing.toLowerCase() === 'no') {
        alert('Incorrect.');
    }

var teach = 'Have I ever taught?';
var teach = prompt('Have I ever taught?');
    if (teach.toLowerCase() === 'yes') {
            alert('Excellent. Correct.');
} else if (teach.toLowerCase() === 'no') {
            alert('Try Again. Incorrect.');
}
    
var secretNumber = 8;
var tries = 0;
    while (tries < 6) {
        tries++
        var guess = prompt('Guess a number between 1-10');
        if (guess < 8) {
            alert('too low');
        } else if (guess > 8) {
            alert('too high');
        } else if (guess == 8) {
            alert('You guessed Correct!');
            break;

        }
        
    }
     

    var guessHisName = ['My best friend from high school', 'His father', 'Spiderman', 'A mountain range', 'A natural disaster', 'My brother', 'His godfather']
    for (var i = 0; i < 6; i++) {
        var answer = prompt('Who was my son named after? \nMy best friend from high school, \nHis father,\nSpiderman, \nA mountain range, \nA natural disaster, \nMy brother, \nHis godfather')
        if (answer === guessHisName[2]) {
            alert('Super!');
            break;
        } else {
            alert('Your Spidey senses are off. Keep trying.');
        }
    }
    alert('The correct answer is: Spiderman!')
    //score++;

//crafted and brewed by dora with Jacob's Code 201 guidance
//codeproject.com credit to 'How to Adjust your WebSite to fit all types of Resolution'
//credit W3School.com for google fonts direction

