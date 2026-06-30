let count = 0;

const counter = document.getElementById("counter");

function updateCounter() {
    counter.innerText = count;
}

function ibtnHandler() {
    count++;
    updateCounter();
}

function dbtnHandler() {
    count--;
    updateCounter();
}

function rbtnHandler() {
    count = 0;
    updateCounter();
}