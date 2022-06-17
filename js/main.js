var playerWins = 0;
var computerwins = 0;


function computerPlay(){

    return(Math.floor(Math.random() * 3)); 

}

function determineWinner(playerSelection, computerSelection){

    if(((playerSelection + 1) % 3) == computerSelection) {
        /* Computer Won */
        return(1);
    }
    else if(playerSelection == computerSelection) {
        /* Tie */
        return(0);
    }
    else {
        /* You won */
        return(2);
    }
}

function game(userInput) {

    let winner = determineWinner(userInput, computerPlay());

        switch(winner) {
            case 0:
                console.log("Its a tie")
                break;
            case 1:
                computerwins++;
                console.log("Computer Won. Computer has " + computerwins + " wins.");
                break;
            case 2:
                playerWins++;
                console.log("You Won. You have " + playerWins + " wins.");
                break;
        }

    if(isOver()){

        if(playerWins > computerwins){
            console.log("Congratulations, you won.")
        }
        else {
            console.log("Sorry... you lost.");
        }
        
    }

}

function isOver(){
    if((playerWins == 5) || (computerwins == 5)){
        return(true);
    }
    else {
        return(false);
    }
}

  