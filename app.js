const winner = "";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const randoArray = ["rock", "paper", "scissors"];
let choice1 = document.getElementById("choice");
let choice2 = document.getElementById("compchoice");

//player 1 selection//
rock.addEventListener("click", () => {
  choice1.textContent = "Choice: rock";
})
paper.addEventListener("click", () => {
  choice1.textContent = "Choice: paper"
})
scissors.addEventListener("click", () => {
  choice1.textContent = "Choice: scissors"
})
//random computer selection//
random.addEventListener("click", () => {
choice2.textContent = randoArray[Math.floor(Math.random()*randoArray.length)];
announce(choice1, choice2);
});
//compare selection & announce winner//
const announce = ((choice1, choice2) => {
  if (choice1.textContent === choice2.textContent) {
    alert("It's a tie!");
  } else if 
      (choice1.textContent === "Choice: rock" && choice2.textContent === "paper") {
        alert("Computer wins!");
        } else if (choice1.textContent === "Choice: paper" && choice2.textContent === "scissors") {
                    alert("Computer wins!");
          } else if (choice1.textContent === "Choice: scissors" && choice2.textContent === "rock") {
                      alert("Computer wins!");
          } else {
            alert("You win!");
          }
});

// reset for new game//
reset.addEventListener("click", () => {
  choice1.textContent === "Choice:";
  choice2.textContent === "";
  winner.textContent === "";
});

