function getMilk(cost){
    var bottles = console.log(Math.floor(cost/1.5))
}

console.log(getMilk(20));
//var cost = console.log(bottles * 1.5);

// ---------------New code line----------------------------
// ---------------------Parameter and Arguments ----------
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var age = prompt("What is your age?"); 
        var yearsLeft = 90-age; 
        var monthsLeft = yearsLeft*12
        var weeksLeft = monthsLeft*4
        var daysLeft  = weeksLeft*7
    
        console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft +  " Months left "  )
        
    /*************Don't change the code below**********/
    }
    
    console.log(lifeInWeeks());

// ---------------New code line----------------------------
// ---------------------  ----------
    function getMilk(cost, charge){
        var charge = cost%1.5;
        return charge;
    }
    
    var charge= console.log(getMilk(20));
    //var cost = console.log(bottles * 1.5);


// ---------------New code line----------------------------
// ---------------------  ----------
function getMilk(cost, charge){

    function getMilk(cost, costperBottle){
        console.log("Buy " + calcBottle(cost, costperBottle) + " Bottles of Milk");
    
        return calcChange(cost, costperBottle);
        }
        
    
    
    function calcBottle(startingMoney, costperBottle) {
        var numberOfBottles = Math.floor(startingMoney/costperBottle)
        return numberOfBottles;
    }
    
    function calcChange(startingMoney, costperBottle) {
        var numberOfBottles = Math.floor(startingMoney % costperBottle)
        return numberOfBottles;
    }
} 
    console.log(getMilk(13, 1.5))

// ---------------New code line----------------------------
// ---------------------  ----------

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.


function bmiCalculator(weight, height) {
    // var bmi = weight / (height ** 2);
    var bmi = weight / Math.pow(height,2);

    return bmi;
    // return Math.floor(bmi);
    // return Math.round(bmi);
}

console.log(bmiCalculator(65, 1.8));


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
