let random = parseInt((parseInt(Math.random() * 100 + 1)));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultPars');

const p = document.createElement('p');
let numGuess = 1;
let PrevGuess = [];
let PlayGame = true;

if (PlayGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        ValidateGuesses(guess);
    });
}

function ValidateGuesses(guess) {
    if (isNaN(guess)) {
        alert('Entert a valid number')
    } else if (guess > 100) {
        alert('Enter number must be less then 100')
    } else if (guess < 1) {
        alert('Enter number must be grater then 1')
    } else {

        PrevGuess.push(guess);
        if (numGuess === 11) {
            DisplayGuesses(guess);
            DisplayMessage(`Game is Over... The random number is ${random}`);
            Endgame();
        } else {
            DisplayGuesses(guess);
            CheckGuesses(guess);
        }
    }
}

function CheckGuesses(guess) {
    if (guess === random) {
        DisplayMessage(`You guess it Right`);
        Endgame();
    } else if (guess < random) {
        DisplayMessage(`Number is too low...`);

    } else {
        DisplayMessage(`Number is too high...`);

    }
}

function DisplayGuesses(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess} `;
    numGuess++;
    remaining.innerHTML = ` ${ 11 - numGuess }`;
}

function DisplayMessage(message) {
    LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function Endgame() {
    userInput.disabled = true;
    submit.disabled = true;

    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart Game';
    StartOver.appendChild(restartBtn);
    restartBtn.addEventListener('click', function() {
        StartGame();
    });
}

function StartGame() {
    numGuess = 1;
    PrevGuess = [];
    PlayGame = true;

    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    LowOrHigh.innerHTML = '';
    userInput.disabled = false;
    submit.disabled = false;
    StartOver.innerHTML = '';

    random = parseInt(Math.random() * 100 + 1);
    console.log(random); // Debugging
}