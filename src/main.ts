import './style.css'

let playerOneChoice = ''

const rockButtonPlayerOne = document.querySelector('.player1 i.rock')
const paperButtonPlayerOne = document.querySelector('.player1 i.paper')
const scissorsButtonPlayerOne = document.querySelector('.player1 i.scissors')

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
}

rockButtonPlayerOne?.addEventListener('click', handleRockButtonPlayerOne)

function handleScissorsButtonPlayerOne(event: Event) {
  playerOneChoice = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
}

scissorsButtonPlayerOne?.addEventListener(
  'click',
  handleScissorsButtonPlayerOne
)

function handlePaperButtonPlayerOne(event: Event) {
  playerOneChoice = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
}

paperButtonPlayerOne?.addEventListener('click', handlePaperButtonPlayerOne)

let playerTwoChoice = ''
const rockButtonPlayerTwo = document.querySelector('.player2 i.rock')
const paperButtonPlayerTwo = document.querySelector('.player2 i.rock')
const scissorsButtonPlayerTwo = document.querySelector('.player2 i.scissors')
const playerTwoNameText = document.querySelector('.player2 h2')
const playerTwoNameInput = document.querySelector('.player2 input')


function handleRockButtonPlayerTwo(event : Event) {
  playerTwoChoice = 'rock' 
  
  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
  if (buttonClicked)
}