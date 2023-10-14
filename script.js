'use strict';
// html elements

// days
const dayCardTopSideEl = document.querySelector('.top.day');
const dayCardBottomSideEl = document.querySelector('.bottom.day');
const dayCurrentTopNumberEl = document.querySelector('.current-top-number.day');
const dayCurrentBottomNumberEl = document.querySelector(
  '.current-bottom-number.day'
);
const dayNextNumberEl = document.querySelector('.next-number.day');

// hours
const hourCardTopSideEl = document.querySelector('.top.hour');
const hourCardBottomSideEl = document.querySelector('.bottom.hour');
const hourCurrentTopNumberEl = document.querySelector(
  '.current-top-number.hour'
);
const hourCurrentBottomNumberEl = document.querySelector(
  '.current-bottom-number.hour'
);
const hourNextNumberEl = document.querySelector('.next-number.hour');

// minutes
const minuteCardTopSideEl = document.querySelector('.top.minute');
const minuteCardBottomSideEl = document.querySelector('.bottom.minute');
const minuteCurrentTopNumberEl = document.querySelector(
  '.current-top-number.minute'
);
const minuteCurrentBottomNumberEl = document.querySelector(
  '.current-bottom-number.minute'
);
const minuteNextNumberEl = document.querySelector('.next-number.minute');

// seconds
const secondCardTopSideEl = document.querySelector('.top.second');
const secondCardBottomSideEl = document.querySelector('.bottom.second');
const secondCurrentTopNumberEl = document.querySelector(
  '.current-top-number.second'
);
const secondCurrentBottomNumberEl = document.querySelector(
  '.current-bottom-number.second'
);
const secondNextNumberEl = document.querySelector('.next-number.second');

// global variables
const second = 1000; // miliseconds
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const displayCountdown = function () {
  const countdown = new Date('01 Jan, 2024 00:00:00').getTime(); // future date
  const now = new Date().getTime(); // actual date
  const gap = countdown - now; // millisconds

  // days countdown values
  dayCurrentTopNumberEl.textContent = String(Math.trunc(gap / day)).padStart(
    2,
    0
  );
  dayCurrentBottomNumberEl.textContent = String(Math.trunc(gap / day)).padStart(
    2,
    0
  );
  dayNextNumberEl.textContent = String(Math.trunc(gap / day)).padStart(2, 0);

  // hours countdown values
  hourCurrentTopNumberEl.textContent = String(
    Math.trunc((gap % day) / hour)
  ).padStart(2, 0);
  hourCurrentBottomNumberEl.textContent = String(
    Math.trunc((gap % day) / hour)
  ).padStart(2, 0);
  hourNextNumberEl.textContent = String(
    Math.trunc((gap % day) / hour)
  ).padStart(2, 0);

  // minutes countdown values
  minuteCurrentTopNumberEl.textContent = String(
    Math.trunc((gap % hour) / minute)
  ).padStart(2, 0);
  minuteCurrentBottomNumberEl.textContent = String(
    Math.trunc((gap % hour) / minute)
  ).padStart(2, 0);
  minuteNextNumberEl.textContent = String(
    Math.trunc((gap % hour) / minute)
  ).padStart(2, 0);

  // seconds countdown values
  secondCurrentTopNumberEl.textContent = String(
    Math.trunc((gap % minute) / second)
  ).padStart(2, 0);
  secondCurrentBottomNumberEl.textContent = String(
    Math.trunc((gap % minute) / second)
  ).padStart(2, 0);
  secondNextNumberEl.textContent = String(
    Math.trunc((gap % minute) / second)
  ).padStart(2, 0);
};

// function that animate cards
const flipTime = function () {
  // display the refreshed countdown
  setTimeout(() => displayCountdown(), 1000); // slight delay for a smooth start

  // stop timer when ends
  if (
    +dayCurrentTopNumberEl.textContent === 0 &&
    +hourCurrentTopNumberEl.textContent === 0 &&
    +minuteCurrentTopNumberEl.textContent === 0 &&
    +secondCurrentTopNumberEl.textContent === 1
  ) {
    clearInterval(timerInterval);
    dayCardTopSideEl.classList.remove('flip-animation');
    hourCardTopSideEl.classList.remove('flip-animation');
    minuteCardTopSideEl.classList.remove('flip-animation');
    secondCardTopSideEl.classList.remove('flip-animation');
    return;
  } // flip the seconds
  else
    setTimeout(() => secondCardTopSideEl.classList.add('flip-animation'), 500);

  // flip the minutes
  if (+secondCurrentTopNumberEl.textContent === 1) {
    setTimeout(() => minuteCardTopSideEl.classList.add('flip-animation'), 500);
  } else minuteCardTopSideEl.classList.remove('flip-animation');

  // flip the hours
  if (
    +minuteCurrentTopNumberEl.textContent === 0 &&
    +secondCurrentTopNumberEl.textContent === 1
  ) {
    setTimeout(() => hourCardTopSideEl.classList.add('flip-animation'), 500);
  } else hourCardTopSideEl.classList.remove('flip-animation');

  // flip the days
  if (
    +hourCurrentTopNumberEl.textContent === 0 &&
    +minuteCurrentTopNumberEl.textContent === 0 &&
    +secondCurrentTopNumberEl.textContent === 1
  ) {
    setTimeout(() => dayCardTopSideEl.classList.add('flip-animation'), 500);
  } else dayCardTopSideEl.classList.remove('flip-animation');
};

// display the countdown
displayCountdown();

// run the countdown
const timerInterval = setInterval(flipTime, 1000);
