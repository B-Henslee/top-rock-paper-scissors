function getComputerChoice (){
    const choices = ["rock","paper","scissors"]
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice);
}

function getPlayerChoice (){
    let playerChoice = prompt("rock paper scissors?")
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
        let playerChoice=getPlayerChoice();
        let computerChoice=getComputerChoice();
        console.log("You chose: ", playerChoice, "\nComputer choice: ", computerChoice);
        game=playRound(playerChoice,computerChoice);
}

playGame();

/* 
Get user choice from button click
run getComputerchoice
get winner
update score
alert box is player wins/loses 5
*/
