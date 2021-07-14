function numeroVisor(numeroCalculadora){
   let visor = document.getElementById('resultado')
   visor.value += numeroCalculadora  
}
function limpar(){
   let clear = document.getElementById('resultado')
   clear.value = ""
}
function calcular(){
   let calculo = document.getElementById('resultado').value;
    if(calculo){
        document.getElementById('resultado').value = eval(calculo);
    }
    else{
        resultado.value = "Nada para calcular"
    }
}