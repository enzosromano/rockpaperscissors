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

function game() {

    let playerWins = 0;
    let computerwins = 0

    while((playerWins < 5) && (computerwins < 5)){

        let winner = determineWinner(0, computerPlay());

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
    }

    if(playerWins > computerwins){
        console.log("Congratulations, you won.")
    }
    else {
        console.log("Sorry... you lost.");
    }

}

  