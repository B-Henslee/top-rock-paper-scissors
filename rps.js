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

function playRound(playerChoice,computerChoice){
        if (playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper"){
                console.log("you win");
        }
        else if (playerChoice === "rock" && computerChoice === "paper" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock"){
                    console.log ("you lose");
                }
        else {
            console.log("draw")
        }
    return(playerChoice,computerChoice)
}

function playGame(){
    for (let rounds = 0; rounds < 5; rounds++){
        let playerChoice=getPlayerChoice();
        let computerChoice=getComputerChoice();
        game=playRound(playerChoice,computerChoice);

        console.log("Round:", rounds+ 1);
        console.log(game);
    }
}

playGame();