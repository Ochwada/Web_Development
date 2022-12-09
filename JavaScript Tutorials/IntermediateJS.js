
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