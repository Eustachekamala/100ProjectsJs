const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        const result = playRound(button.id, computerPlayer());
        resultEl.textContent = result;
    });
});

function computerPlayer(){
    const choices = ["rock", "paper", "scissor"]
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a tie"
    } else if(
        (playerSelection === "rock" && computerSelection ==="scissor")||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
        ){
            playerScore++;
            playerScoreEl.textContent = playerScore;
            return "You win ! " + playerSelection + " beats " + computerSelection;
        }
        else{
            computerScore++;
            computerScoreEl.textContent = computerScore;
            return "You lose ! " + computerSelection + " beats " + playerSelection;
        }
}
