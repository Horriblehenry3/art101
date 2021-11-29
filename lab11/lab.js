

$("#box1").append("<button id='c-button'>maroon</button>");


$("#box2").append("<button id='p-button'>blue</button>");


$("#box3").append("<button id='r-button'>red</button>");
//each button should change color of the div

$("#c-button").click(funciton()
 {
  $(this).parent().toggleClass("special");
}

$("#p-button").click(funciton() {
  $(this).parent().toggleClass("special1");
})

$("#r-button").click(funciton() {
  $(this).parent().toggleClass("special2");
})
