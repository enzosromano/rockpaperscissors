function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        console.log("rock");
        return("Rock");
    }
    else if (choice == 1) {
        console.log("paper");
        return("Paper");
    }
    else {
        console.log("scissors")
        return("Scissors");
    }
}

function determineWinner(playerSelection, computerSelection){
    if (input == output){
        console.log("Its a tie")
    }
    else {
        console.log("Somebody lost. You chose: " + input + ", and they chose " + output);
    }
}

let output = computerPlay();
let input = "Paper";
determineWinner(input, output);
  