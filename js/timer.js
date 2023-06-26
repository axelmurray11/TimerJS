let inputs,clock,alarm,minutes,seconds,hours,repeater;
window.addEventListener('load',()=>{//espero a que se cargue el documento
    inputs = Array.from(document.getElementsByClassName('number'))
    clock = document.querySelector('.clock');
    alarm = new Audio('sound/sound_alarm.mp3');
})
//funcion principal
function startTimer() { 
    //llamamos 3 funciones
    parseTime()//Busco y transformo los valores del input a numeros
    countDown()//arranco el contador
    setTimer()//seteo el timer visualmente

}
//funcion para cambiar el timer de la pantalla y de la pestaña
function setTimer(){
    //cambio la hora de la pantalla 
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`;
    //cambio la hora de la pestaña
    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}
//funcion para convertir el string del input a numeros
function parseTime() {

    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);

}
//funcion para arrancar el contador
function countDown(){
    repeater = setInterval(runner,1000)
}
//funcion que cuenta
function runner(){
 // Si tengo más de 0 segundos, restá segundos 
// Si tengo 0 segundos pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos 
// Si tengo 0 segundos, 0 minutos pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas 
//Sino arranca la alarma 
    if(seconds > 0){
        seconds--;

    }else{
        if(minutes > 0){
            seconds = 59;
            minutes--;
        }else{
            if(hours > 0){
                seconds = 59;
                minutes = 59;
                hours--;
            }else{
                alarm.play();
            }
        }
    }
    setTimer();
}
//funcion para detener el timer
function stopTimer(){
    clearInterval(repeater);
    location.reload()
}