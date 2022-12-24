
function add(num1, num2) {
    return (num1 + num2);
};
function multiply(num1, num2) {
    return (num1 * num2);
};

function subtract(num1, num2) {
    return (num1 - num2);
};

function divide(num1, num2) {
    return (num1 / num2);
};


function calculator(num1, num2, operator) {
    return operator(num1, num2);
};

calculator(4, 5, add);
calculator(4, 5, multiply);

/* 
 */
function HouseKeeper(name, age, yearsOfExperince, whichHotelsWorkedin) {
    this.name = name;
    this.age = age;
    this.yearsOfExperince = yearsOfExperince;
    this.whichHotelsWorkedin = whichHotelsWorkedin;
    this.clean = function () {
        alert("May I clean your clothes");
        pickUpClothes();
        takeThemToLaundry();}

};

var HouseKeeper1 = new HouseKeeper( "Rose",21, 4, ["hilton", "rosemery", "daisy"]);


HouseKeeper1.clean();

var HouseKeeper1 = {
    name: "Rose",
    age: 21,
    yearsOfExperince: 4,
    whichHotelsWorkedin: ["hilton", "Rosemary", "daisy"],
}
/* 
var HouseKeeper1 = new HouseKeeper( "Rose",21, 4, ["hilton", "rosemery", "daisy"]);
var HouseKeeper2 = new HouseKeeper( "Linda",42, 10, ["hilton", "rosemery"])
                    ; */