var playerWins = 0;
var computerwins = 0;

function computerPlay(){

    return(Math.floor(Math.random() * 3)); 

}

function determineWinner(playerSelection, computerSelection){

    console.log(playerSelection);
    console.log(computerSelection);

    switch(computerSelection) {
        case 0:
            document.getElementById('compRock').style.backgroundColor = "black";
            document.getElementById('compRock').innerText = "Rock";
            break;
        case 1:
            document.getElementById('compPaper').style.backgroundColor = "black";
            document.getElementById('compPaper').innerText = "Paper";
            break;
        case 2:
            document.getElementById('compScissors').style.backgroundColor = "black";
            document.getElementById('compScissors').innerText = "Scissors";
            break;
    }

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

function returnToDefault(){

    document.getElementById('compRock').style.backgroundColor = "#950740";
    document.getElementById('compRock').innerText = "???";
    document.getElementById('compPaper').style.backgroundColor = "#950740";
    document.getElementById('compPaper').innerText = "???";
    document.getElementById('compScissors').style.backgroundColor = "#950740";
    document.getElementById('compScissors').innerText = "???";
}

function game(userInput) {

    returnToDefault();

    let winner = determineWinner(userInput, computerPlay());

        switch(winner) {
            case 0:
                document.getElementById('gameResult').innerText = "It's a tie.";
                break;
            case 1:
                computerwins++;
                document.getElementById('gameResult').innerText = "The computer wins.";
                break;
            case 2:
                playerWins++;
                document.getElementById('gameResult').innerText = "You won!!";
                break;
        }

    document.getElementById('scoreboard').innerText = 
        ("You: " + playerWins + " | Computer: " + computerwins);

    if(isOver()){

        if(playerWins > computerwins){
            console.log("Congratulations, you won.");
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

  