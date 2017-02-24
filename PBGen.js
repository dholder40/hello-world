/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*  LEARNED in DOC --- 
 *   NEVER use document.write in a script after the page is loaded...
 *   it will clear the html page...  see...
 *   
 *   https://www.w3schools.com/js/js_htmldom_html.asp
 *   
 *   
 */

function RandBuffer (bufLength, nLimit)
{
    // generate an array of random numbers between 1 and bufLimit.
    // no doubles allowed, and sorted ascending
    //var nLimit = 69;
    var bufNumbers = [];
    var number, goodnumber = 0;
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
            if (goodnumber === bufLength)   // looks like we're done.
            {
                done = true;
            }
        }
        else
        {
            console.log("Duplicate found");
        }
    }
    // Sort em
    console.log("Ready to sort");
    bufNumbers.sort(function(a, b){return a - b;}); 
    
    return bufNumbers;
}


function PBGenerator() {
    var PBBuff = [];
    PBBuff = RandBuffer(5,69);
    // don't forget the magic pball number...
    var PB = Math.floor(Math.random() * 26 + 1);
    console.log("PB " + PB + "\n");
    document.getElementById("PB").innerHTML = PBBuff + " PB " + PB ;
}

function MMGenerator() {
    var MMBuff = [];
    MMBuff = RandBuffer(5,75);
     // don't forget the magic megamil number...
    var MM = Math.floor(Math.random() * 15 + 1);
    console.log("MM " + MM + "\n");
    document.getElementById("MM").innerHTML = MMBuff + " MM " + MM ;
}
