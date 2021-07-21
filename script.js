class Calculadora {
    constructor(){
        this.visor = document.getElementById('resultado')
        this.createListener()
    }
    createListener(){
        //Botões dos números
        document.getElementById("num1").addEventListener("click", () => this.numeroVisor('1'))
        document.getElementById("num2").addEventListener("click", () => this.numeroVisor('2'))
        document.getElementById("num3").addEventListener("click", () => this.numeroVisor('3'))
        document.getElementById("num4").addEventListener("click", () => this.numeroVisor('4'))
        document.getElementById("num5").addEventListener("click", () => this.numeroVisor('5'))
        document.getElementById("num6").addEventListener("click", () => this.numeroVisor('6'))
        document.getElementById("num7").addEventListener("click", () => this.numeroVisor('7'))
        document.getElementById("num8").addEventListener("click", () => this.numeroVisor('8'))
        document.getElementById("num9").addEventListener("click", () => this.numeroVisor('9'))
        document.getElementById("num0").addEventListener("click", () => this.numeroVisor('0'))

        //Operações
        document.getElementById("somar").addEventListener("click", () => this.numeroVisor('+'))
        document.getElementById("subtrair").addEventListener("click", () => this.numeroVisor('-'))
        document.getElementById("multiplicar").addEventListener("click", () => this.numeroVisor('*'))
        document.getElementById("dividir").addEventListener("click", () => this.numeroVisor('/'))

        //Função de Limpar
        document.getElementById("limpar").addEventListener("click", () => this.limpar())

        //Função de Calcular
        document.getElementById("igual").addEventListener("click", () => this.calcular())
    }

    numeroVisor(numeroCalculadora){
        this.visor.value += numeroCalculadora  
    }

    limpar(){
        this.visor.value = ""
    }

    calcular(){
        if(this.visor){
            document.getElementById('resultado').value = eval(this.visor.value);
        }
        else{
            resultado.value = "Nada para calcular"
        }
    }
}

//Criando o novo objeto
let calculadora = new Calculadora();



