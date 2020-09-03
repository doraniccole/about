"use strict";

console.log('js is loaded');

// Here is a string 
var name = 'How would you like to be addressed?'; 

// getting input from a sign
var name = prompt('How would you like to be addressed?');

alert('Great meeting you, ' + name);
console.log(name);
console.log('Great meeting you, ' + name);

// here is a string
var outdoors = 'Have you been outdoors today?';

// getting input
var outdoors = prompt('Have you been outdoors today?');
    if (outdoors.toLowerCase() === 'yes') {
    alert('Great! Correct.');
} else if (outdoors.toLowerCase() === 'no') {
    alert('Oops! Incorrect.');
        }

var kids = 'Do you have human children?';

var kids = prompt('Do you have human children?');
    if (kids.toLowerCase() === 'yes') {
    alert('Absolutely. Correct.');
} else if (kids.toLowerCase() === 'no') {
    alert('Oops! Incorrect.');
        }

var desert = 'Have you been to the desert?';

var desert = prompt('Have you been to the desert?');
    if (desert.toLowerCase() === 'yes') {
        alert('Fantastic! Correct.');
 } else if (desert.toLowerCase() === 'no') {
        alert('Darn. Incorrect.');
        }

var sing = 'Do you like to sing?';

var sing = prompt('Do you like to sing?');
    if (sing.toLowerCase() === 'yes') {
        alert('Fabulous. Correct.'); 
 } else if (sing.toLowerCase() === 'no') {
        alert('Incorrect.');
        }

var teach = 'Have you ever taught?';

var teach = prompt('Have you ever taught?');
     if (teach.toLowerCase() === 'yes') {
            alert('Excellent. Correct.');
  } else if (teach.toLowerCase() === 'no') {
            alert('Try Again. Incorrect.');
        }

    
var secretNumber = 8;
var tries = 0;
var guess;
    while (tries < 6) {
        tries++
        var guess = prompt('Guess a number between 1-10');
        if (guess < 8) {
            alert('too low');
        } else if (guess > 8) {
            alert('too high');
        }
        else if (guess == 8) {
            alert('You guessed Correct!');
            break;
        }
    }
    alert('Number of guesses expired. The secret number is ' + secretNumber) 


// crafted and brewed by dora with Jacob's Code 201 guidance
// codeproject.com credit to 'How to Adjust your WebSite to fit all types of Resolution'
// credit W3School.com for google fonts direction

