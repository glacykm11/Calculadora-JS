function numeroVisor(numeroCalculadora){
   let visor = document.getElementById('resultado')
   visor.value += numeroCalculadora  
}

document.getElementById("num1").addEventListener("click",function(){
   numeroVisor(1)
})

function limpar(){
   let clear = document.getElementById('resultado')
   clear.value = ""
}

function calcular(operacao){
   let valor1 = document.getElementById('resultado').value
   let valor2 = document.getElementById('resultado').value

   if (operacao == 'somar'){
      let res = document.getElementById('resultado')
      res.value = parseInt(valor1) + parseInt(valor2)
      console.log(res.value)
   }else if(operacao == 'subtrair'){
      let res = document.getElementById('resultado')
      res.value = valor1 - valor2
      console.log(res.value)
   }else if(operacao == 'multiplicar'){
      res.value = valor1 * valor2
   }else if(operacao == 'dividir'){
      res.value = valor1 / valor2
   }
}

function igual(){
   let resultado = document.getElementById('resultado').textContent;

    if(resultado){
        resultado.value = eval(resultado.value);
    }

    else{
        resultado.value = "Nada para calcular"
    }
}

document.getElementById("somar").addEventListener("click",function(){
   calcular('somar')
   limpar()
   calcular('somar')
   
})

document.getElementById("subtrair").addEventListener("click",function(){
   calcular('subtrair')
   limpar()
})

document.getElementById("multiplicar").addEventListener("click",function(){
   calcular('multiplicar')
   limpar()
})

document.getElementById("dividir").addEventListener("click",function(){
   calcular('dividir')
   limpar()
})

document.getElementById("igual").addEventListener("click",function(){
   calcular()
   igual()
   limpar()
})

