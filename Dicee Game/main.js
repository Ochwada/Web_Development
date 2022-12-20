
let path = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png")

function chooseDice(imgAr, path){
    let randomNumber1 = Math.floor(Math.random() * diceface.length);
    return path[randomNumber1];

}

// document.getElementById("button").onclick = chooseDice()
function myFunction() {
    document.getElementById("btn").innerHTML = "Hello World";
  }

  //how to create a random equation to pick a picture from list?
  /*  ---- Document Object Model ----->
 ---- --------------------- --------> */
/* document.getElementsByClassName("btn")[0].style.color = "red";
document.querySelector("#list .item");
​document.querySelectorAll("#list .item");
document.querySelector("#list .item a").innerHTML = "Second Google Link";
document.querySelector("#list .item a").style.color = "pink"
document.querySelector("h1").classList.toggle("huge");
document.querySelector("h1").innerHTML = "<em>Good Bye </em>"
document.querySelector("a").setAttribute("href", "https://www.bing.com");
*/

//connect to mangodb in node.js?
