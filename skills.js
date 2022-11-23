let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 90,    
speed = 100;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

let circularProgress1 = document.querySelector(".circular-progress-2"),
progressValue1 = document.querySelector(".progress-value-2");

let progressStartValue1 = 0,    
progressEndValue1 = 80,    
speed1 = 100;

let progress1 = setInterval(() => {
progressStartValue1++;

progressValue1.textContent = `${progressStartValue}%`
circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

if(progressStartValue1 == progressEndValue1){
    clearInterval(progress1);
}    
}, speed1);
