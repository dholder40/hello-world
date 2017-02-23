/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nLimit = 69;
var bufNumbers = [];
var number, loopCtr, goodnumber = 0;

var done = false;

while (!done)
    {
        // Grab a random number
        number = Math.floor(Math.random() * nLimit + 1);
        console.log(" number " + number);
        
        // make sure it's not in the array yet
        if (bufNumbers.indexOf(number) === -1)
        {
            // it's not, so push it.
            bufNumbers.push(number);
            goodnumber++;
            if (goodnumber === 5)   // looks like we're done.
            {
                done = true;
            }
        }
        else
        {
            console.log("Duplicate found");
        }
    }

// Sort em and put em out
console.log("Ready to sort");
bufNumbers.sort(function(a, b){return a - b;}); 

// document.write("Numbers: ");
// document.write("<p>  </p>");

for (var n = 0; n < 5; n++)
    {
        console.log("number  " + bufNumbers[n] + "\n");
        document.write(bufNumbers[n] + "    ");
 
    }

document.write("<p>  </p>");

// don't forget the magic pball number...
var PB = Math.floor(Math.random() * 26 + 1);
console.log("PB " + PB + "\n");
document.write(" PB = " + PB);
document.write("<p>  </p>");

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points + " PB " + PB ;

function myFunction1() {
    points.sort();
    document.getElementById("demo").innerHTML = points;
}
function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
}
