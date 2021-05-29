//Start Timer
let mSeconds=0;
let seconds=0;
let minutes=0;
let timerStarted= false;
let key=0;
let currentTime=0;

let startTimer = () =>{
    if(timerStarted){
        mSeconds++;
        if(mSeconds==100){
            seconds++;
            mSeconds=0;
        }
        if(seconds==60){
            minutes++;
            seconds=0;
        }
    }
    document.querySelector('#m-seconds').innerText=addingZero(mSeconds);
    document.querySelector('#seconds').innerText=addingZero(seconds);
    document.querySelector('#minutes').innerText=addingZero(minutes);
    
};

let addingZero = (time) =>{
    if(time<=9){
        return "0"+time;
    }
    else{
        return time;
    }
}
let restartTimer = () =>{
    timerStarted=false;
    clearInterval(key);
    mSeconds=0;
    seconds=0;
    minutes=0;
    document.querySelector('#m-seconds').innerText=addingZero(mSeconds);
    document.querySelector('#seconds').innerText=addingZero(seconds);
    document.querySelector('#minutes').innerText=addingZero(minutes);    
}

//Start Button
let startButton=document.querySelector('#start-btn');
startButton.addEventListener('click',function(){
    if(!timerStarted){
        key= setInterval(startTimer,10);
        timerStarted=true;
    }
});


//Stop Button
let stopButton=document.querySelector('#stop-btn');
stopButton.addEventListener('click',function(){
    timerStarted=false;
    clearInterval(key);
    //currentTime=addingZero(minutes)+' : '+addingZero(seconds)+' : '+addingZero(mSeconds);
});


//Restart Button
let restartButton=document.querySelector('#restart-btn');
restartButton.addEventListener('click',function(){
    restartTimer();
});

/*
//Generate time
let generateTime = () =>{
    let num=Math.random();
    let mSec=Math.floor(num*100);
    let sec=Math.floor(num*10);
    return '00 : '+addingZero(sec)+' : '+addingZero(mSec);
}



let timeGenerated=0;
let getTime=document.querySelector('#get-time');
getTime.addEventListener('click',function(){
    timeGenerated=generateTime();
    document.querySelector('#time').innerText=timeGenerated;
});

*/

//Keyboard Keys
// s to start, t to stop, R to Restart
document.addEventListener('keypress',function(event){
    let keyboardKey=event.key;
    switch(keyboardKey){
        case "s":
            if(!timerStarted){
                key= setInterval(startTimer,10);
                timerStarted=true;
            }
            break;
        case "t":
            timerStarted=false;
            clearInterval(key);
            break;
        case "r":
            restartTimer();
            break;
    }
});

/*
let result = () =>{
    if(timeGenerated===currentTime && currentTime!=='00 : 00 : 00'){
        resultTime.innerText="Correct!";
    }
    else{
        resultTime.innerText="Try Again!";
    }
}
//Result
let resultTime= document.querySelector('#answer');
//result();
*/