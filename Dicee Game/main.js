// Dice 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("#dice img")[0];
image1.setAttribute("src", randomDiceImage);


// Dice 2
randomNumber2 = Math.floor(Math.random() *6) +1;
randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("#dice img")[1];
image2.setAttribute("src", randomDiceImage2);

// IMAGE -- Flag

/* flag = new Image(100, 150);
flag.src = "images/flag.png";

 */

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =" 🚩 Player 1 Wins";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML =" 🚩 Player 2 Wins";
 }else{
    document.querySelector("h1").innerHTML = "Its a Draw";
 }
