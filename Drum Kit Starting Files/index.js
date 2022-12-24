/* alert("hello world") */
/* 
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("w got clicked")
}
document.querySelector(".w").addEventListener("click", function () {
alert("w got clicked")
});

document.querySelectorAll("button")[2].addEventListener("click", function () {
    alert("s got clicked")
}); 
 */

var noOfDrumButtons= document.querySelectorAll(".drum").length;

for (var i=0; i< noOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    });
};

