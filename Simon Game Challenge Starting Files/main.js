

/* Create a new array called buttonColours and set it to hold the sequence 
"red", "blue", "green", "yellow".let buttonColor */
let buttonColors = ["red", "blue", "green", "yellow"]

/* create a new empty array called gamePattern, userClickedPattern.*/
let gamePattern = [];
let userClickedPattern = [];


/* ----------------------New FUNCTION--------------------------- */
/* ------------------------------------------------------------- */

/*  detect when any of the buttons are clicked and trigger a handler function.*/
$(".btn").on("click", function() {

    /* In  the handler, create a new variable called userChosenColor to store the 
    id of the button that got clicked.*/

    let userChosenColor = $(this).attr("id");
    /* Add the contents of the variable userChosenColor created*/

    userClickedPattern.push(userChosenColor);

    //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColor);
    animetePress(userChosenColor);

});

/* ----------------------New FUNCTION--------------------------- */
/* ------------------------------------------------------------- */
function playSound(name){
    /* play the sound for the button color selected */
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

};

/* ----------------------New FUNCTION--------------------------- */
/* ------------------------------------------------------------- */

function animetePress(currentColor){
    let activeButton = $("." + currentColor);
    
    activeButton.addClass("pressed");
    setTimeout(function(){
        activeButton.removeClass("pressed"); 
    }, 100);
};
/* ----------------------New FUNCTION--------------------------- */
/* ------------------------------------------------------------- */
/* Generate a new random number between 0 and 3, and store it in a variable 
called randomNumber */
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    /*Create a new variable called randomChosenColor and use the randomNumber 
    from step 2 to select a random color from the buttonColors array */
    let randomChosenColor = buttonColors[randomNumber];

    /* Add the new randomChosenColor generated to the end of the gamePattern. */
    gamePattern.push(randomChosenColor);

    /* Use jQuery to select the button with the same id as the randomChosenColor:
    Animate a flash to the button selected */
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    
};


