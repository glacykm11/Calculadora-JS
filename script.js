class Calculadora {
    constructor(){
        this.clear = document.getElementById('resultado')
        this.visor = document.getElementById('resultado')
        this.calculo = document.getElementById('resultado')
    }

    numeroVisor(numeroCalculadora){
        this.visor.value += numeroCalculadora  
    }

    limpar(){
        this.clear.value = ""
    }

    calcular(){
        if(this.calculo){
            document.getElementById('resultado').value = eval(this.calculo.value);
        }
        else{
            resultado.value = "Nada para calcular"
        }
    }
}

//Criando o novo objeto
let calculadora = new Calculadora();

//Botões dos números
document.getElementById("num1").addEventListener("click", () => calculadora.numeroVisor('1'))
document.getElementById("num2").addEventListener("click", () => calculadora.numeroVisor('2'))
document.getElementById("num3").addEventListener("click", () => calculadora.numeroVisor('3'))
document.getElementById("num4").addEventListener("click", () => calculadora.numeroVisor('4'))
document.getElementById("num5").addEventListener("click", () => calculadora.numeroVisor('5'))
document.getElementById("num6").addEventListener("click", () => calculadora.numeroVisor('6'))
document.getElementById("num7").addEventListener("click", () => calculadora.numeroVisor('7'))
document.getElementById("num8").addEventListener("click", () => calculadora.numeroVisor('8'))
document.getElementById("num9").addEventListener("click", () => calculadora.numeroVisor('9'))
document.getElementById("num0").addEventListener("click", () => calculadora.numeroVisor('0'))

//Operações
document.getElementById("somar").addEventListener("click", () => calculadora.numeroVisor('+'))
document.getElementById("subtrair").addEventListener("click", () => calculadora.numeroVisor('-'))
document.getElementById("multiplicar").addEventListener("click", () => calculadora.numeroVisor('*'))
document.getElementById("dividir").addEventListener("click", () => calculadora.numeroVisor('/'))

//Função de Limpar
document.getElementById("limpar").addEventListener("click", () => calculadora.limpar())

//Função de Calcular
document.getElementById("igual").addEventListener("click", () => calculadora.calcular())