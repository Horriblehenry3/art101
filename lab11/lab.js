

$("#box1").append("<button id='c-button'>Button</button>");


$("#box2").append("<button id='p-button'>Button</button>");


$("#box3").append("<button id='r-button'>Button</button>");
//each button should change color of the div
$(“#c-button”).click(function() {
$(this).parent().toggleClass(“Special”);
})

$(“#p-button1”).click(function() {
$(this).parent().toggleClass(“Special1”);
})

$(“#r-button1”).click(function() {
$(this).parent().toggleClass(“Special2”);
})
