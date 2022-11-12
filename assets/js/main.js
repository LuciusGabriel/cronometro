let segundos = 0;
let minutos = 0;


function segundo(){
    //incrementa os segundos
    segundos++;
    if(segundos==60){
        //incrementa os minutos
        minutos++;
        //Zerar os segundos
        segundos=0;
        //escreve os minutos
        document.querySelector('.minutos').innerHTML=minutos
    }
    //escreve os segundos
    document.querySelector('.segundos').innerHTML=segundos
    
}

setInterval(function(){ segundo() },100)