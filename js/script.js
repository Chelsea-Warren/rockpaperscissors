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

        let index=Math.floor(Math.random() * 3);
        console.log(index);
        let computerChoice=["Rock","Paper","Scissor"];
        computerChoice[index];
         $("#computerChoice").text( computerChoice[index]);



if(userChoice === "rock" && computerChoice=== "Rock" ||
    userChoice=== "paper" && computerChoice=== "Paper" ||
    userChoice=== "scissors" && computerChoice=== "Scissors"){
       $("#result").html("Nobody Wins ");
    }

else if(userChoice === "rock" && computerChoice=== "Scissors" ||
    userChoice=== "paper" && computerChoice=== "Rock" ||
    userChoice=== "scissors" && computerChoice=== "Paper"){
       $("#result").html("You Win ");
    }







    }); 
});