/**
 * Author:    Henry Merry
 * Created:   10.27.2021
 *
 * (c) Copyright by Me
 **/

 //calbakcs

num = [1,2,3,4,5]
console.log("My Array", num);

var Hey = num

function Boobs(x){
  return(x + 5)
}
//test function
console.log("Whats 1 + 5?", Boobs(1));
console.log("Whats 2 + 5?", Boobs(2));

var results = num.map(Boobs);
console.log("Adds 5 to any given x value.Heres 1 through 5.", results);
