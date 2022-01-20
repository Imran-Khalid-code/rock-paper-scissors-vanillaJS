const weapons = document.querySelectorAll('.weapon')
const random = document.querySelector('.pressMe')
const userDisplay = document.querySelector('#user-choice')
const compDisplay = document.querySelector('#computer-choice')
const resultDisplay = document.querySelector('#result')
const display = document.querySelector('.display')
const compScore = document.querySelector('.score')
const userScore = document.querySelector('.points')
//
let userChoice
let secretGuess
let score
let compTotal = 0
let userTotal = 0
//
weapons.forEach((weapon) => {
	weapon.addEventListener('click', (e) => {
		userChoice = e.target.id
		console.log(userChoice)
		userDisplay.innerHTML = userChoice

		comp()
		result()
	})
})

//
const comp = () => {
	secretGuess = Math.trunc(Math.random() * 3) + 1
	console.log(secretGuess)

	if (secretGuess === 1) {
		secretGuess = 'scissors'
	} else if (secretGuess === 2) {
		secretGuess = 'rock'
	} else if (secretGuess === 3) {
		secretGuess = 'paper'
	}
	compDisplay.innerHTML = secretGuess
}

function result() {
	if (secretGuess === userChoice) {
		score = 'It is a draw'
	} else if (secretGuess === 'scissors' && userChoice === 'rock') {
		score = 'You have won!'
	} else if (secretGuess === 'rock' && userChoice === 'scissors') {
		score = 'The Comp has Won!'
	} else if (secretGuess === 'paper' && userChoice === 'scissors') {
		score = 'You have won!'
	} else if (secretGuess === 'rock' && userChoice === 'paper') {
		score = 'You have won!'
	} else if (secretGuess === 'paper' && userChoice === 'rock') {
		score = 'The Comp has Won!'
	} else if (secretGuess === 'scissors' && userChoice === 'paper') {
		score = 'The Comp has Won!'
	}
	resultDisplay.innerHTML = score
	runningScore()
}

//running total:
function runningScore() {
	if (score === 'You have won!') {
		userTotal++
		userScore.innerHTML = userTotal
	} else if (score === 'The Comp has Won!') {
		compTotal++
		compScore.innerHTML = compTotal
	}
	if (score === 'It is a draw') {
	} else {
		return
	}
}
const clearBtn = document.createElement('button')
display.appendChild(clearBtn)
clearBtn.innerText = 'Clear'
clearBtn.style.marginBottom = '10px'

function cleanGame() {
	resultDisplay.innerHTML = ''
	compDisplay.innerHTML = ''
	userDisplay.innerHTML = ''
	userScore.innerHTML = ''
	compScore.innerHTML = ''
	userTotal = 0
	compTotal = 0
}

clearBtn.addEventListener('click', cleanGame)
