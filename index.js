window.onload = function () {
    var seconds = 00; 
    var tens = 00; 
    var minutes=00;
    var hours=00;
    var para=document.getElementById("first")
    var inc_hours=document.getElementById("hours")
    var inc_mins=document.getElementById("minutes")
    var inc_tens = document.getElementById("tens")
    var inc_secs = document.getElementById("seconds")
    var buttonStart = document.getElementById('btn-start');
    var buttonStop = document.getElementById('btn-stop');
    var stop=1;
    var buttonReset = document.getElementById('btn-reset');
    var box=document.getElementById("box");
    var Interval ;
    buttonStart.onclick = function() {
    Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function() {
    clearInterval(Interval);
    box.innerHTML+="Lap"+" "+stop+"          "+para.innerText+"<br/>";
    stop++;
    }
    buttonReset.onclick = function() {
    clearInterval(Interval);
    tens=0;
    seconds=0;
    minutes=0;
    hours=0;
    inc_tens.innerHTML = "00";
    inc_secs.innerHTML = "00";
    inc_mins.innerHTML="00";
    box.innerHTML="";
    stop=1;
    }
    function startTimer() {
    tens++; 
    if(tens <= 9){
    inc_tens.innerHTML = "0" + tens;
    }
    if (tens > 9){
    inc_tens.innerHTML = tens;
    
    } 
    if (tens > 99) {
    seconds++;
    inc_secs.innerHTML = "0" + seconds;
    tens = 0;
    inc_tens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
    inc_secs.innerHTML = seconds;
    }
    if(seconds>59){
        minutes++;
        inc_mins.innerHTML="0"+minutes;
        seconds=0;
        inc_secs.innerHTML = "0" + 0;
    }
    if(minutes>9){
        inc_mins.innerHTML=minutes;
    }
    if(minute>59){
        hours++;
        inc_hours.innerHTML="0"+hours;
        minutes=0;
        inc_mins.innerHTML="0"+0;
    }
    if(hours>9){
        inc_hours.innerHTML=hours;
    }
}
}