var playerWins = 0;
var computerwins = 0;

function computerPlay(){

    return(Math.floor(Math.random() * 3)); 

}

function determineWinner(playerSelection, computerSelection){

    console.log(playerSelection);
    console.log(computerSelection);

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
                document.getElementById('gameResult').innerText = "It's a tie."
                break;
            case 1:
                computerwins++;
                document.getElementById('gameResult').innerText = "The computer wins."
                break;
            case 2:
                playerWins++;
                document.getElementById('gameResult').innerText = "You won!!"
                break;
        }

    document.getElementById('scoreboard').innerText = 
        ("You: " + playerWins + " | Computer: " + computerwins)

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

  