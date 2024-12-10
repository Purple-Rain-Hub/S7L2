// esercizio 1
const form = document.querySelector("form");
const btnInvia = document.getElementById("btnInvia");
const btnCancella = document.getElementById("btnCancella");
const p = document.querySelector("p");
const input = document.querySelector("input");

document.addEventListener("load", init());

function init(){
    let savedName = localStorage.getItem("name");
    p.innerHTML = savedName;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    p.innerHTML = "";
    localStorage.setItem("name", `${input.value}`);
    p.innerHTML = input.value
});

btnCancella.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.removeItem("name");
    p.innerHTML = "";
    input.value = "";
});

// esercizio 2
const timer = document.querySelector("h1");
let i = JSON.parse(sessionStorage.getItem("time")) || 1;

setInterval(timerFunc, 1000)

function timerFunc(){
sessionStorage.setItem("time", i)
timer.innerHTML = `sei sul sito da: ${sessionStorage.getItem("time")} secondi`

i++
}
