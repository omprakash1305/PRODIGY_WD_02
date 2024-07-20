

document.addEventListener('DOMContentLoaded', () => {
    const tryStopwatchBtn = document.getElementById('tryStopwatchBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    tryStopwatchBtn.addEventListener('click', () => {
        alert('Navigating to Stopwatch...');
        // You can replace this with the actual navigation code to the stopwatch section
    });

    learnMoreBtn.addEventListener('click', () => {
        alert('Navigating to Learn More...');
        // You can replace this with the actual navigation code to the learn more section
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const startStopBtn = document.getElementById('startStopBtn');
    const resetBtn = document.getElementById('resetBtn');
    const lapBtn = document.getElementById('lapBtn');
    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    const lapsContainer = document.getElementById('lapsContainer');

    let startTime, updatedTime, difference, tInterval, running = false, lapCounter = 1;

    function startStopwatch() {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startStopBtn.innerHTML = "Stop";
        lapBtn.disabled = false;
        running = true;
    }

    function stopStopwatch() {
        clearInterval(tInterval);
        startStopBtn.innerHTML = "Start";
        running = false;
    }

    function resetStopwatch() {
        clearInterval(tInterval);
        stopwatchDisplay.innerHTML = "00:00:00.000";
        lapsContainer.innerHTML = "";
        startStopBtn.innerHTML = "Start";
        running = false;
        lapCounter = 1;
        lapBtn.disabled = true;
    }

    function getShowTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((difference % 1000) / 1);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;

        stopwatchDisplay.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    function addLap() {
        const lapTime = stopwatchDisplay.innerHTML;
        const lapElement = document.createElement('div');
        lapElement.className = 'lap';
        lapElement.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
        lapsContainer.appendChild(lapElement);
        lapCounter++;
    }

    startStopBtn.addEventListener('click', () => {
        if (!running) {
            startStopwatch();
        } else {
            stopStopwatch();
        }
    });

    resetBtn.addEventListener('click', resetStopwatch);
    lapBtn.addEventListener('click', addLap);

    lapBtn.disabled = true;
});