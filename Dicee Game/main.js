/* 
let path = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png")

function chooseDice(imgAr, path){
    let randomNumber1 = Math.floor(Math.random() * path.length);
    return path[randomNumber1];

}

// document.getElementById("button").onclick = chooseDice()
function myFunction() {
    document.getElementById("btn").innerHTML = "Hello World";
  }
 */
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", "randomDiceImage");