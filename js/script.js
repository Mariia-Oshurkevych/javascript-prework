let playerScore = 0;
let computerScore = 0;

function buttonClicked (buttonName) {

function nameTheMove(selectedNumber) {
  if(selectedNumber == 1) {
    return('kamień');
  } else if(selectedNumber == 2) {
    return('papier');
  } else if(selectedNumber == 3) {
    return('nożyce');
  }
}


function showResults(playerMove, computerMove) {
  if(playerMove == 'kamień' && computerMove == 'papier'){
    playerScore = playerScore + 1;
    alert('Wygrywasz');
  } else {
    computerScore = computerScore + 1;
    alert('Przegrywasz:( ');
  }
  alert('Zagrałeś ' + playerMove + ', a ja - ' + computerMove + '.');
  document.querySelector('#result').innerHTML = playerScore + ':' + computerScore;
}


const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = nameTheMove(randomNumber);
const playerMove = buttonName;
showResults(playerMove, computerMove);
}

const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');

buttonRock.addEventListener ('click', function (){
  buttonClicked('kamień');
})

buttonPaper.addEventListener ('click', function (){
  buttonClicked('papier');
})

buttonScissors.addEventListener('click', function (){
  buttonClicked('nożyce');
})

