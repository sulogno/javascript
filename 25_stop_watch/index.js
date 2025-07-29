const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedtime = 0;
let isrunning = false;

function start() {
    if (!isrunning) {
        startTime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}

function stop() {
    if (isrunning) {
        clearInterval(timer);
        isrunning = false;
    }
}

function reset() {
    clearInterval(timer);
    isrunning = false;
    elapsedtime = 0;
    display.textContent = "00:00:00:00";
}

function update() {
    const currenttime = Date.now();
    elapsedtime = currenttime - startTime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedtime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedtime / 1000) % 60);
    let milliseconds = Math.floor((elapsedtime % 1000) / 10);

    // Format to 2-digit
    let formattedTime = 
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}:` +
        `${milliseconds.toString().padStart(2, "0")}`;

    display.textContent = formattedTime;
}
