import './style.css'

let playerOneChoice = ''

const rockButtonPlayerOne = document.querySelector('.player1 i.rock')
const paperButtonPlayerOne = document.querySelector('.player1 i.paper')
const scissorsButtonPlaayerOne = document.querySelector('.player1 i.scissors')
const playerOneNameText = document.querySelector('.player1 h2')
const playerOneNameInput = document.querySelector('.player1 input')

let playerTwoChoice = ''

const rockButtonPlayerTwo = document.querySelector('.player2 i.rock')
const paperButtonPlayerTwo = document.querySelector('.player2 i.rock')
const scissorsButtonPlaayerTwo = document.querySelector('.player2 i.scissors')
const playerTwoNameText = document.querySelector('.player2 h2')
const playerTwoNameInput = document.querySelector('.player2 input')

const winner = document.querySelector('footer')

function handleRockButtonPlayerOne(event: Event) {
  playerOneChoice = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }

if (buttonClicked instanceof HTMLButtonElement) {
  if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
    if (winner) {
      winner.textContent = 'Player 2 Wins!'
    }
  }
}
if (buttonClicked instanceof HTMLButtonElement) {
  if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
    if (winner) {
      winner.textContent = 'It was a draw'
    }
  }
}
rockButtonPlayerOne?.addEventListener('click', handleRockButtonPlayerOne)
