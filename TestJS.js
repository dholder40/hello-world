/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Define quarter here.
var quarter = function (number) {
    return number / 4;
};

var q = 12;
var nRet;
//  var newq = prompt("Enter a new number");
    var newq = 40;

nRet = quarter(newq);
document.write("The number is " + newq + "\n");
document.write("<p>  </p>");
//prompt("");

if (nRet % 3 === 0 ) {
  document.write("The statement is true");

} else {
  document.write("The statement is false");
};
document.write("<p>  </p>");

document.write("\n q = " + q + " number = " + nRet + "\r");
document.write("<p>  </p>");

/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
        console.log("Your name wasn't found!");
        document.write("Your name wasn't found! \n");

} else {
	console.log(hits);
        document.write("\n hits = " + hits + "\n");
}