

    
        function computerPlay() //returns randomChoice
        {
            let choices = ["rock", "paper", "scissors"];
            randomChoice = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById('computerResult').classList.add('selected');
            document.getElementById('computerResult').classList.replace('fa-question','fa-hand-'+randomChoice);

            return (randomChoice);
    
    
        }
    
        function playRound(playerSelection, computerSelection) //returns result
        {
    
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            let result;
    
    
            if (playerSelection === computerSelection)
            {
    
                result = "draw";
    
            }
            else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
            {
    
                result = "lose";
    
            }
            else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "rock"))
            {
    
                result = "win";
    
            }
            else
            {
                result = "failure";
            }
    
            console.log("You chose " + playerSelection);
            console.log("Computer chose " + computerSelection);
            return result;
    
    
    
        }
    
    
        function game(rounds) //not used?
        {
            let result
            let playerScore = 0;
            let computerScore = 0
    
            for (i = 0; i < rounds; i++)
            {
    
                playerSelection = setPlayerChoice();
                computerSelection = computerPlay();
    
                console.log('Round ' + (i + 1));
                result = playRound(playerSelection, computerSelection);
                if (result === "Win")
                {
                    playerScore++;
                    console.log("Result: " + result);
                }
                else if (result === "Lose")
                {
                    computerScore++;
                    console.log("Result: " + result);
                }
                else if (result === "Draw")
                {
                    console.log(result);
                }
                else
                {
    
                    console.log("You're a failure. Try again");
                    i--;
                }
                console.log("Score - Player: " + playerScore + ". Computer: " + computerScore + ".");
            }
    
    
        }
    
        function setPlayerChoice(playerChoice) { //returns playerChoice
            disableChoices();
            var selectedId = document.getElementById(playerChoice);
            selectedId.classList.add('selected');

            return playerChoice;
          }

        function displayResult(result) {
            
        }
    
        function enableChoices() { //no return

            choices = document.querySelectorAll('.playerChoice');
            console.log(choices);
      
            choices.forEach((choice) => {
              choice.addEventListener('click', function(e) {
                           setPlayerChoice(choice.id);

              });
               
          })

        }

        function disableChoices() { //no return

            choices = document.querySelectorAll('.playerChoice');
      
            choices.forEach((choice) => {
              choice.removeEventListener('click', function(e) {
                           setPlayerChoice(choice.id);
              });
              choice.classList.add('hidden');

              
          })

        }

        enableChoices();
      