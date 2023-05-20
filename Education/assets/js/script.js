// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
 bars.classList.toggle('active');
 nav.classList.toggle('visible');
}

const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')

hamburger.addEventListener('click', () => {
 navUl.classList.toggle('show')
})

// timer
// Set the target date (change it to your desired date)
var targetDate = new Date("2023-9-06").getTime();

// Update the timer every second
var timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
 var now = new Date().getTime();
 var distance = targetDate - now;

 // Calculate the days, hours, minutes, and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the timer
 var timerElement = document.getElementById("timer");
 var timerDays = document.getElementById("days");
 var timerHour = document.getElementById("hour");
 var timerMins = document.getElementById("mins");
 var timerSecs = document.getElementById("secs");

 timerDays.innerHTML = days + "d ";
 timerHour.innerHTML = hours + "h ";
 timerMins.innerHTML = minutes + "m ";
 timerSecs.innerHTML = seconds + "s ";

 // Check if the countdown is over
 if (distance < 0) {
  clearInterval(timerInterval);
  timerElement.innerHTML = "Countdown is over!";
  timerDays.innerHTML = " ";
  timerHour.innerHTML = " ";
  timerMins.innerHTML = " ";
  timerSecs.innerHTML = " ";
 }
}

