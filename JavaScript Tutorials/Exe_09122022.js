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