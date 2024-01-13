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


function playRound(playerChoice){
    let computerChoice=getComputerChoice();
        if (playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper"){
                console.log("You chose: ", playerChoice, "\nComputer choice: ", computerChoice);
                console.log("you win");
        }
        else if (playerChoice === "rock" && computerChoice === "paper" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock"){
                console.log("You chose: ", playerChoice, "\nComputer choice: ", computerChoice);
                console.log ("you lose");
                }
        else {
            console.log("You chose: ", playerChoice, "\nComputer choice: ", computerChoice);
            console.log("draw")
        }

}

playRound();
