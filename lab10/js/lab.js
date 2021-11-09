

function putNameInTitle() {

  var field = document.getElementById("myfield");
  var name = field.value;

  // Use this input to change the text from
  // ‘Hello, World!’ to ‘Hello’ + the user’s name
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Hello, " + name;
}

// Create an event handler within the JS file that listens for a button click.
var buttonEl = document.getElementById("bt");
buttonEl.addEventListener("click", putNameInTitle);


var usrname = prompt("PLease enter your name.")

// sortUserName - a function that takes user input and sorts the letters
// of their name
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 != currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
var newname = function shuffleArray(usrname);


var outputEL = document.getElementById("fin");
 //assign element to new variable
  outputEL.innerHTML = newname;
//change what is in the <p>
