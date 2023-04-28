'use strict';

//selectings elements.
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentscore_0 = document.getElementById('current--0');
const currentscore1 = document.getElementById('current--1');
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
const score = [0, 0];
let currentScore = 0;
let activeplayer = 0;
let playing = true;

btnRoll.addEventListener('click', function () {
  //genrating random function
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //dice display

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

btnHold.addEventListener('click', function hold() {
  if (playing) {
    score[activeplayer] += currentScore;
  }

  document.getElementById(`score--${activeplayer}`).textContent =
    score[activeplayer];
  if (score[activeplayer] >= 20) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
    playing = false;
  } else {
    switchplayer();
  }
});
