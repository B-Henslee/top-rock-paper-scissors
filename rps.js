function getComputerChoice (){
    const choices = ["rock","paper","scissors"]
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice);
}

function getPlayerChoice (){
    let playerChoice;
    
    while(true){
        playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase()
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
            break
        }
    }  
    return (playerChoice);
}

let playerScore = 0
let computerScore = 0


function playRound(playerChoice,computerChoice){
        if (playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper"){
                playerScore++;
                console.log("you win");
        }
        else if (playerChoice === "rock" && computerChoice === "paper" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock"){
                computerScore++;
                console.log ("you lose");
                }
        else {
            console.log("draw")
        }
    return(playerChoice,computerChoice)
}

function playGame(){
    while(playerScore < 5 && computerScore <5){
        let playerChoice=getPlayerChoice();
        let computerChoice=getComputerChoice();
        game=playRound(playerChoice,computerChoice);

        console.log("Player Score:", playerScore);
        console.log("Computer Score:", computerScore);
        console.log(game);
    }
}

playGame();
