
// ---------------New code line----------------------------
// ---------------------Random  ----------
var n = Math.random();

n = n*6
n = Math.floor(n)+1;

console.log(n);

// ---------------------Love calc  ----------
//  prompt that ask for the name of the two people 
//  calculate a random number that is %

//  give the information inform of alert

function loveCalc( ) {
    var name1 = prompt("Partner 1");
    var name2 = prompt("Partner 2");

    var loveDegree = Math.random();
        loveDegree =Math.floor((loveDegree*100)+1);

    if (loveDegree === 100){
        alert("Get Married");
    }else{
        alert(" This gonna be hard");
    }

    return loveDegree;
    
}

alert("your Love is " + loveCalc() + " % strong")

// ---------------CONTROL FLOOD --------------------------------
// ---------------------Condition  ---------
function loveCalc( ) {
    var name1 = prompt("Partner 1");
    var name2 = prompt("Partner 2");

    var loveDegree = Math.random();
        loveDegree =Math.floor((loveDegree*100)+1);

        if (loveDegree > 60){
            alert("Get Married");
        }else{
            alert(" This gonna be hard");
        }

        return loveDegree;
    
}

alert(" Because your Love is " + loveCalc() + " % strong")

// ---------------------Condition  --------- 

if (a == b) {
    console.log("Yes")
} else {
     console.log("no")
}

if (a === b) { // check if the data type is matching
    console.log("Yes")
} else {
     console.log("no")
}

// ---------------------Combine comparatives  ---------


function loveCalc( ) {
    var name1 = prompt("Partner 1");
    var name2 = prompt("Partner 2");

    var loveDegree = Math.random();
        loveDegree =Math.floor((loveDegree*100)+1);

        if (loveDegree > 70){
            alert("Get Married");
        if (loveDegree > 40 && loveDegree <= 70 ) {
            alert("Work on your Love");
        }
        }else{
            alert(" This gonna be hard, quit");
        }

        return loveDegree;
    
}

alert(" Because your Love is " + loveCalc() + " % strong")

// ---------------------Leap year function  ---------
function isLeap(year) {
    var year = prompt("Enter year");
    
    if (year % 4 === 0) {
        if (year % 100 === 0 ) {
            if (year % 400 === 0 ) {
                return "Leap year"
            } else {
              return "Not Leap year"  
            }
        } else {
            return "Leap year"
        }
            
    } else {
           return "Not Leap year"

    }
}
console.log(isLeap())

// ---------------------Array  ---------
// -------------------------------------

// store collection of related data
function guestlist_check(guestname) {
    var guestname = prompt("what is your name ?")
    var guestlist = ["ochwada","button","input","textarea","select","details","linda"];

    if (guestlist.includes(guestname)) {
        console.log("welcome, to our event")
    } else {
        console.log("maybe next time")
    }
}

guestlist_check()

// ---------------------Array  ---------
// ---------------------buzz-Fizzbuzz--
// Buzz quiz

var output = [];
var count = 1;

function fizzbuzz() {
  while (count <=100) {
      
  
        if (count % 3  === 0 && count % 5 == 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        }else if (count % 5 === 0) {
            output.push("Buzz");
        }else{
            output.push(count);
        }
   
        count++;
       }
        console.log(output);
}

console.log(fizzbuzz());



// or

function fizzbuzz( ) {
    for (var i = 1; i <= 100; i++){
         if (i % 3 === 0 && i % 5 === 0) {
              console.log("fizzBuzz")
         }else if (i % 3 === 0) {
              console.log("fizz")
         } else if(i % 5 === 0) {
              console.log("buzz")
         }else{
              console.log(i)
         }
    }
}

console.log(fizzbuzz())
// ---------------------Array  ---------
// ---------------------Who is buying Lunch--

var names =  ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying() {
   
     return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today !";
    
}

console.log(whosPaying());

// ---------------------Loops  ---------
// ---------------------Control Statements: While Loop--

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// --------------------for loop--
for (let i = 0; i < 100; i++) {
    console.log(i);
}

// --------------------The Fibonacci sequence--

function fib(n) {
    if (n <= 1) {
        return n 
    }else{
         return fib(n-1) + fib(n-2);
    }
}


fib(10)