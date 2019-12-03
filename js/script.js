// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW


$("document").ready(function(){
    $("#shoot").click(function() {
        let userChoice =$("input").val();
    userChoice=userChoice.toUpperCase()
        $("#userChoice").text(userChoice);

        let index=Math.floor(Math.random() * 3);
        console.log(index);
        let computerChoices=["Rock","Paper","Scissor"];
        let computerChoice=computerChoices[index];
        computerChoice=computerChoice.toUpperCase()
         $("#computerChoice").text( computerChoice
         );

console.log("Computer Choice",computerChoice);
console.log("Users Choice", userChoice);

if(userChoice === "ROCK" && computerChoice=== "ROCK" ||
    userChoice=== "PAPER" && computerChoice=== "PAPER" ||
    userChoice=== "SCISSOR" && computerChoice=== "SCISSOR"){
       $("#result").html("Nobody Wins ");
    }

else if (userChoice === "ROCK" && computerChoice=== "SCISSOR" ||
    userChoice=== "PAPER" && computerChoice=== "ROCK" ||
    userChoice=== "SCISSOR" && computerChoice=== "PAPER"){
       $("#result").html("You Win ");
    }

    else if (userChoice === "ROCK" && computerChoice=== "PAPER" ||
    userChoice=== "PAPER" && computerChoice=== "SCISSOR" ||
    userChoice=== "SCISSOR" && computerChoice=== "ROCK"){
       $("#result").html("Computer Win ");
    }

else{
$("#result").html("ERROR");
}
  }); //close click handler//

$("#name").html("Chelsea ".repeat(5000));






  
});