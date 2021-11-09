/**
 * Author:    Henry Merry
 * Created:   10.31.2021
 *
 * (c) Copyright by Me
 **/

 //assign output


var outputEL = document.getElementById("output");
 //assign element to new variable
   var new1EL = document.createElement("p");
//change what is in the <p>
  new1EL.innerHTML = "new stuff";
  //and again
  var new2EL = document.createElement("p");
  new2EL.innerHTML = "more new stuff";


  //using appendchild
  outputEL.appendChild(new1EL);
  outputEL.appendChild(new2EL);



//try 2
