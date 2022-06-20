var playerWins = 0;
var computerwins = 0;



function computerPlay(){

    return(Math.floor(Math.random() * 3)); 

}

function determineWinner(playerSelection, computerSelection){

    setButtonStates(playerSelection, computerSelection);

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

function setButtonStates(playerSelection, computerSelection) {

    switch(computerSelection) {
        case 0:
            getElement('compRock').style.backgroundColor = "#6F2232";
            getElement('compRock').innerText = "Rock";
            break;
        case 1:
            getElement('compPaper').style.backgroundColor = "#6F2232";
            getElement('compPaper').innerText = "Paper";
            break;
        case 2:
            getElement('compScissors').style.backgroundColor = "#6F2232";
            getElement('compScissors').innerText = "Scissors";
            break;
    }

    switch(playerSelection) {
        case 0:
            getElement('userPaper').style.backgroundColor = "#5b5f68";
            getElement('userScissors').style.backgroundColor = "#5b5f68";
            break;
        case 1:
            getElement('userRock').style.backgroundColor = "#5b5f68";
            getElement('userScissors').style.backgroundColor = "#5b5f68";
            break;
        case 2:
            getElement('userRock').style.backgroundColor = "#5b5f68";
            getElement('userPaper').style.backgroundColor = "#5b5f68";
            break;
    }

}

function returnToDefault(){

    getElement('compRock').style.backgroundColor = "#5b5f68";
    getElement('compRock').innerText = "???";
    getElement('compPaper').style.backgroundColor = "#5b5f68";
    getElement('compPaper').innerText = "???";
    getElement('compScissors').style.backgroundColor = "#5b5f68";
    getElement('compScissors').innerText = "???";

    getElement('userRock').style.backgroundColor = "#950740";
    getElement('userPaper').style.backgroundColor = "#950740";
    getElement('userScissors').style.backgroundColor = "#950740";

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
                document.getElementById('gameResult').innerText = "Computer wins.";
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

function getElement(id){
    return document.getElementById(id);
 }

  