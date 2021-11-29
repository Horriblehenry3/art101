

var myButton = $("#button")
 myButton.click(function(){
  var name = $("#username").val();
  var smell = bst(name);
  newText = "<p> Well it smells as if you are " + smell + "</p>";
  document.getElementById("output").innerhtml = newText;
});

function bst(str) {
if (str == "Henry Holland Merry"){
  return "Lovely"
}
   len = str.length;
   mod = len % 4;
  if (mod==0){
    return "Poopy";
  }
  else if (mod==1){
    return "Stinky";
  }
  else if (mod== 2){
    return " Sewage like";

  }
  else if (mod==3){
    return "Smelly indeed."
  }
}
