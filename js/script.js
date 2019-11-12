// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("document").ready(function(){
    $("#shoot").click(function() {
        let val =$("input").val();
        $("#userChoice").text(val);
    });
});

let index=Math.floor(Math.random() * 3);
console.log(index);
let computerChoice=["Rock","Paper","Scissor"];
computerChoice[index];



