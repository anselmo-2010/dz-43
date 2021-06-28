let counter = document.getElementById("text")
let start = document.getElementById("start")
let stopCount = document.getElementById("stop")
let reset = document.getElementById("reset")

num = Number(counter.innerText);
let myTimeOut;

function myCounter(a){
    num = num + 1;
    counter.innerText = num;
    
    myTimeOut = setTimeout(myCounter, 1000);
};

start.addEventListener("click", function(){
    myCounter();
});

stopCount.addEventListener("click", function(){
    clearTimeout(myTimeOut);
});

reset.addEventListener("click", function(){
    counter.innerText = 0;
    num = 0;
});

