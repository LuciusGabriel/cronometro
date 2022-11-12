var hours=0
var minutes=0
var seconds=0
var milliseconds=1000
var interval

function start(){
    timer()
    interval = setInterval(timer, milliseconds)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    seconds = 0
    minutes = 0
    document.querySelector('h2').innerText = `00:00:00`

}

function twoDigit(digit){
    if(digit<10){
        return ('0'+digit)
    }else{
        return(digit)
    }
}

function timer(){
    seconds++
    if(seconds==60){
        minutes++
        seconds = 0
        if(minutes==60){
            hours++
            minutes=0
        }
    }
    document.querySelector('h2').innerText = twoDigit(hours) +':'+ twoDigit(minutes) +':'+ twoDigit(seconds)
}