const btnStartTimeout = document.getElementById('startTimeout');
const btnStopTimeout = document.getElementById('stopTimeout');

const btnStartInterval = document.getElementById('startInterval');
const btnStopInterval = document.getElementById('stopInterval');

const resultTimeout = document.getElementById('resultTimeout');
const resultInterval = document.getElementById('resultInterval');

let timerTimeout;
let timerInterval;

window.onload = () => { init(5); };


function init (defaultValue = 0) {

    let valueTimeout = defaultValue;
    let valueInterval = defaultValue;

    resultTimeout.innerText = valueTimeout;
    resultInterval.innerText = valueInterval;
}

function incrementValueTimeOut () {
    resultTimeout.innerText = +resultTimeout.innerText + 1;
}

function incrementValueInterval () {
    resultInterval.innerText = +resultInterval.innerText + 1;
}


function stopTimerTimeout () {
    clearTimeout(timerTimeout);
}

function stopTimerInterval () {
    clearInterval(timerInterval);
}


// Exécution d'un callback après un délai
// setTimeout ( callback, delai )
btnStartTimeout.addEventListener('click', function () {
    stopTimerTimeout();

    console.log("Start Timeout");
    timerTimeout = setTimeout(() => {
        incrementValueTimeOut();
    }, 1000);
});

btnStopTimeout.addEventListener('click', () => {
    console.log("Clear Timeout");
    stopTimerTimeout();
});


// Répétition d'un callback après un délai
btnStartInterval.onclick = () => {
    stopTimerInterval();

    console.log("Start Interval");
    // timerInterval = setInterval(() => { incrementValueInterval() }, 1000)
    timerInterval = setInterval(incrementValueInterval, 1000)
}

btnStopInterval.onclick = () => {
    console.log("Stop Interval");
    stopTimerInterval()
}



/**
 * Callback
 */

// function maFonction (callback) {

//     // Instructions...

//     callback()
// }

// maFonction(() => { console.log("Coucou"); })