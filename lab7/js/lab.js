/**
 * Author:    Henry Merry
 * Created:   10.20.2021
 *
 * (c) Copyright by Me
 **/

 //name function
 function sortuser() {

 var userName = window.prompt("Hi. give me your name so I can give you a better one.");
 console.log("username =", userName);
 var nameArray = userName.split('');
 console.log("nameArray =", nameArray);
 var nameArraySort = nameArray.sort();
 console.log("nameArraySort=", nameArraySort);
 var nameSorted = nameArraySort.join('');
 return nameSorted;
 }

 document.writeln("Hey look its fixed :),   ",
  sortuser(), "</br>");
