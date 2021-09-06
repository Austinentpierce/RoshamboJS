import './style.css'

let playerOneChoice = ''

const rockButtonPlayerOne = document.querySelector('.player1 .rock')
const paperButtonPlayerOne = document.querySelector('.player1 .paper')
const scissorsButtonPlayerOne = document.querySelector('.player1 .scissors')
const lizardButtonPlayerOne = document.querySelector('.player1 .lizard')
const spockButtonPlayerOne = document.querySelector('.player1 .spock')

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
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
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
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
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
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
}

function handleLizardButtonPlayerOne(event: Event) {
  playerOneChoice = 'lizard'

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
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
}
function handleSpockButtonPlayerOne(event: Event) {
  playerOneChoice = 'spock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
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
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
}

paperButtonPlayerOne?.addEventListener('click', handlePaperButtonPlayerOne)

let playerTwoChoice = ''
const rockButtonPlayerTwo = document.querySelector('.player2 .rock')
const paperButtonPlayerTwo = document.querySelector('.player2 .rock')
const scissorsButtonPlayerTwo = document.querySelector('.player2 .scissors')
const lizardButtonPlayerTwo = document.querySelector('.player2 .lizard')
const spockButtonPlayerTwo = document.querySelector('.player2 .spock')

function handleRockButtonPlayerTwo(event: Event) {
  playerTwoChoice = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
}

rockButtonPlayerTwo?.addEventListener('click', handleRockButtonPlayerTwo)

function handlePaperButtonPlayerTwo(event: Event) {
  playerTwoChoice = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'It is a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
}

paperButtonPlayerTwo?.addEventListener('click', handlePaperButtonPlayerTwo)

function handleScissorsButtonPlayerTwo(event: Event) {
  playerTwoChoice = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Paper 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 Wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 Wins!'
      }
    }
  }
}

scissorsButtonPlayerTwo?.addEventListener(
  'click',
  handleScissorsButtonPlayerTwo
)
