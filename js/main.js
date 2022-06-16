function computerPlay(){

    return(Math.floor(Math.random() * 3)); 

}

function determineWinner(playerSelection, computerSelection){

    if(((playerSelection + 1) % 3) == computerSelection) {
        return("Computer won");
    }
    else if(playerSelection == computerSelection) {
        return("It's a tie");
    }
    else {
        return("You won!");
    }
}

function game() {
    
}

let output = computerPlay();
let input = Math.floor(Math.random() * 3);
console.log("0:R   1:P   2:S")
console.log("You chose: " + input);
console.log("Computer Chose: " + output);
console.log(determineWinner(input, output));
  