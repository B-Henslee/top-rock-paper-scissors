// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
        // Call the getPlayerChoice function with the button's ID when it is clicked
        const playerChoice = getPlayerChoice(button.id);
        // Call the playRound function with the player's choice
        playRound(playerChoice);
  });
});

function getPlayerChoice (playerChoice){
    return playerChoice;
}

function getComputerChoice (){
    const choices = ["rock","paper","scissors"]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return (computerChoice);
}

let playerScore = 0;
let computerScore= 0;
function updateScore(){
    const playerScoreElement = document.querySelector('#player-score')
    playerScoreElement.textContent = 'Player Score: ' + playerScore;
    const computerScoreElement = document.querySelector('#computer-score')
    computerScoreElement.textContent = 'Computer Score: ' + computerScore;

    if (playerScore >= 5){
    alert("You win!")
    location.reload(); // Reload the page
    }

    else if (computerScore >= 5){
    alert ("You lose");
    location.reload(); // Reload the page
    }
}


function playRound(playerChoice){
    let computerChoice=getComputerChoice();
        if (playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper"){
                playerScore++;
        }
        else if (playerChoice === "rock" && computerChoice === "paper" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock"){
                computerScore++;
                }
        else {
            console.log("You chose: ", playerChoice, "\nComputer choice: ", computerChoice);
            console.log("draw")
        }
        updateScore();
}

playRound();
