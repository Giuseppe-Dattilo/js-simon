console.log('JS OK');

/*
Christmas Countdown
*/

// Prendo gli elementi dal Dom
const targetDays = document.getElementById('days');
const targetHours = document.getElementById('hours');
const targetMin = document.getElementById('minutes');
const targetSec = document.getElementById('seconds');

// Setto il giorno di Natale 
const countdownDate = new Date('December 25 2022').getTime();
console.log(countdownDate)

const secMs = 1000;
const minMs = secMs * 60;
const hoursMs = minMs * 60;
const daysMs = hoursMs * 24;

// Funzione per il countdown
const countdown = setInterval (() => {

    // inizializzo la variabile now col giorno attuale
    const now = new Date().getTime();
    // console.log('now');
    
    // inizializzo la variabile remain calcolando il tempo rimanente 
    const remain = countdownDate - now;
    // console.log(remain);
    
    // Calcolo e poi stampo in pagina 
    const remainDays = Math.floor(remain / daysMs);
    const remainHours = Math.floor((remain % daysMs) / hoursMs);
    const remainMin = Math.floor((remain % hoursMs) / minMs);
    const remainSec = Math.floor((remain % minMs ) / secMs);
 
    targetDays.innerText = remainDays;
    targetHours.innerText = remainHours;
    targetMin.innerText = remainMin;
    targetSec.innerText = remainSec;

   if (remain < 0) {
    clearInterval(countdown);
   }

}, 1000);