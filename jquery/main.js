$(document).ready(function () {
    // $("h1").css("color", "#85586F");
    $("h1").addClass("title")

});
/* $("h1").text("Linda")
$("button").text("Smile and click")
$("button").html("<em>smile and click</em>") */

// JQUERY TO MANIPULATE ATTRIBUTE

/*´console.log($(img).attr("src"))
/* $("a").attr("href", "www.medium.com") */

// addEventListener

$("h1").click(function () {
    $("h1").css("color", "pink")
});

$("button").click(function () {
    $("h1").css("color", "purple");
});

$("input").keypress(function (event){
console.log(event.key);
});

$("body").keypress(function (event) {
    console.log(event.key);
});

$("body").keypress(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "hotpink")
})




