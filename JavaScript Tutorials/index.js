/* alert('hello');
alert('world');

https://github.com/rwaldron/idiomatic.js/ */


// ---------------New code line----------------------------
// ----------------------------------------------------
// Given the existing code below, can you write some code so that their values are switched around?

    var a = "3";
    var b = "8";

/* So that the variable a holds the value "8".

And the variable b holds the value "3".

When the code is run, it should output:

a is 8

b is 3

Do NOT change any of the existing code.

You are NOT allowed to type any numbers.

You should NOT redeclare the variables a and b.*/

  
    var c = a;
        a = b;
        b = c;

/* Hint: Use this code playground to run your code and see if it matches your expectations.

Hint: The solution is just 3 lines of code. 
 */


console.log("a is " + a);
console.log("b is " + b);
// ---------------New code line ----------------------------
// ------------------------------------------------------

var message = "Hello";
var myName = "Linda";

console.log(message + " "+ myName);

// ---------------New code line----------------------------
// ---------------------Concatenation----------------------

console.log( myName.length);

var tweet = prompt("Compose a tweet:");
var tweetCount = tweet.length;
var maxCount = 100;
var remCount = maxCount - tweet.length

console.log("you have written " + tweetCount + " characters, remaining " + remCount + " characters")

// ---------------New code line----------------------------
// ---------------------Slice----------------------
// Cut the tween to only 100 characters
var tweet_under_100 = tweet.slice(0,100)
console.log(tweet_under_100 + " ( Char: " + tweet_under_100.length + ")" )

// console.log(tweet.slice(0,100) + " ( Char: " + tweet_under_100.length + ")" )

// ---------------New code line----------------------------
// ---------------------toUpperCase----------------------

var myName = "Linda"

myName.toUpperCase();
myName.toLowerCase();

console.log("Hello " + myName)

// ---------------New code line----------------------------
// -------------------------------------------
var userName = prompt("What is your name?");

var firstChr = userName.slice(0,1);
var firstChrUpper = firstChr.toUpperCase();

var otherChr = userName.slice(1,userName.length);
var otherChrLower = otherChr.toLowerCase();

var finalname = firstChrUpper + otherChrLower;

console.log("Hello " + finalname)

// ---------------New code line----------------------------
// -------------Basic Algorithm-----------------------------

var myName_input  = prompt("What's your name?");
var myName_1 = myName_input.slice(0,1).toUpperCase();
var myName_rest = myName_input.slice(1, myName_input.length).toLowerCase();
var myName = myName_1 + myName_rest;


var greetings = console.log("Hello " + myName);

var dogAge = prompt("What is your dog's age?");

var humanAge = console.log(myName + ", Your dog is " +(((dogAge - 2) * 4) + 21) + " in human Age");

// ---------------New code line----------------------------
// -------------Increment and Decrement-----------------------------
