/**
 * Author:    Henry Merry
 * Created:   10.20.2021
 *
 * (c) Copyright by Me
 **/

 //define Variables
 mT = ["car", "bike", "bus"];

 mmr = { make: "Lincoln", model: "Town Car", color: "Purple", year: 1994 }

 //Output
document.writeln("My methods of transportation: ", mT, "</br>");
 document.writeln("mmr: <pre>",
    JSON.stringify(mmr, null, '\t'), "</pre>");
