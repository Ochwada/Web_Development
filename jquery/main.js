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

$("h1").before("<button> Before Button </button>")

$("h1").after("<button> After Button </button>")

$("h1").prepend("<button> Prepend Button</button>")

$("h1").append("<button> Append Button </button>")


/* $("button").remove(); --> remove all buttons
$("h1 button").remove();

 $("button").click(function () {
    $("h1").hide()
}); 

 $("button").on("click", function () {
    $("h1").hide();
});

$("button").on("click", function () {
    $("h1").toggle();
});


$("button").on("click", function () {
    $("h1").fadeToggle();
});


$("button").on("click", function () {
    $("h1").slideToggle();
});

$("button").on("click", function () {
    $("h1").animate(
        {opacity:0.5}
    );
});
 */
$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate(
        { opacity: 0.5 }
    );
});