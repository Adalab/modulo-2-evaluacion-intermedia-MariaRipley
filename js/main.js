'use strict';

const selectNumber = document.querySelector('.js__select');
const betInput = document.querySelector('.js__betInput');
const btn = document.querySelector('.js__btn');
const subtitle = document.querySelector('.js__subtitle');
const remainBalance = document.querySelector('.js__remainBalance');
let balance = 50;
const newGameBtn = document.querySelector('.js__newGameBtn');


function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

function selectNumberValue(event) {
    const valueNumber = selectNumber.value;
    return valueNumber;
}

function betAmountValue(event) {
    const betValue = betInput.value; 
    return betValue;
}

function handleClickBtn(event) {
    event.preventDefault();
    getRandomNumber();
    const randomNumber = getRandomNumber(6);
    console.log('El número afortunado es: ' + randomNumber);
    selectNumberValue();
    betAmountValue();
    
    let userSelection = parseInt(selectNumber.value);
    let userBet = parseInt(betInput.value);
    if(userSelection === randomNumber) {
        subtitle.innerHTML = '¡Has ganado el doble de lo apostado! 😄';
        balance = balance + userBet*2;
        remainBalance.innerHTML = balance;
    } else {
        subtitle.innerHTML = 'Has perdido lo apostado 😔';
        balance = balance - userBet;
        remainBalance.innerHTML = balance;
    }
}

function finishGame(event) {
    if(remainBalance.innerHTML >= 200) {
        newGameBtn.classList.remove('hidden');
    }
}

finishGame();


btn.addEventListener('click', handleClickBtn);

