function fibra(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = function() {
        return (this.num2) - (this.num1);
    };
    this.status1 = function() {
        if (this.result() == 0) {
            return "Fibra 01 Verde/Grupo 01";
        } else if (this.result() == 1) {
            return "Fibra 02 Amarelo/Grupo 01";
        } else if (this.result() == 2) {
            return "Fibra 03 Branco/Grupo 01";
        } else if (this.result() == 3) {
            return "Fibra 04 Azul/Grupo 01";
        } else if (this.result() == 4) {
            return "Fibra 05 Vermelho/Grupo 01";
        } else if (this.result() == 5) {
            return "Fibra 06 Violeta/Grupo 01";
        } else if (this.result() == 6) {
            return "Fibra 07 Marron/Grupo 01";
        } else if (this.result() == 7) {
            return "Fibra 08 Rosa/Grupo 01";
        } else if (this.result() == 8) {
            return "Fibra 09 Preto/Grupo 01";
        } else if (this.result() == 9) {
            return "Fibra 10 Cinza/Grupo 01";
        } else if (this.result() == 10) {
            return "Fibra 11 Laranja/Grupo 01";
        } else if (this.result() == 11) {
            return "Fibra 12 Aqua Marine/Grupo 01"
        } else if (this.result() == 12) {
            return "Fibra 13 Verde/Grupo 02";
        } else if (this.result() == 13) {
            return "Fibra 14 Amarelo/Grupo 02";
        } else if (this.result() == 14) {
            return "Fibra 15 Branco/Grupo 02";
        } else if (this.result() == 15) {
            return "Fibra 16 Azul/Grupo 02";
        } else if (this.result() == 16) {
            return "Fibra 17 Vermelho/Grupo 02";
        } else if (this.result() == 17) {
            return "Fibra 18 Violeta/Grupo 02";
        } else if (this.result() == 18) {
            return "Fibra 19 Marron/Grupo 02";
        } else if (this.result() == 19) {
            return "Fibra 20 Rosa/Grupo 02";
        } else if (this.result() == 20) {
            return "Fibra 21 Preto/Grupo 02";
        } else if (this.result() == 21) {
            return "Fibra 22 Cinza/Grupo 02";
        } else if (this.result() == 22) {
            return "Fibra 23 Laranja/Grupo 02";
        } else if (this.result() == 23) {
            return "Fibra 24 Aqua Marine/Grupo 02"
        } else if (this.result() == 24) {
            return "Fibra 25 Verde/Grupo 03";
        } else if (this.result() == 25) {
            return "Fibra 26 Amarelo/Grupo 03";
        } else if (this.result() == 26) {
            return "Fibra 27 Branco/Grupo 03";
        } else if (this.result() == 27) {
            return "Fibra 28 Azul/Grupo 03";
        } else if (this.result() == 28) {
            return "Fibra 29 Vermelho/Grupo 03";
        } else if (this.result() == 29) {
            return "Fibra 30 Violeta/Grupo 03";
        } else if (this.result() == 30) {
            return "Fibra 31 Marron/Grupo 03";
        } else if (this.result() == 31) {
            return "Fibra 32 Rosa/Grupo 03";
        } else if (this.result() == 32) {
            return "Fibra 33 Preto/Grupo 03";
        } else if (this.result() == 33) {
            return "Fibra 34 Cinza/Grupo 03";
        } else if (this.result() == 34) {
            return "Fibra 35 Laranja/Grupo 03";
        } else if (this.result() == 35) {
            return "Fibra 36 Aqua Marine/Grupo 03"
        }
    }
}

function calcula() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var f1 = new fibra(num1, num2);

    document.getElementById("status").innerHTML = "" + f1.status1();
}
/*function clicar() { analizar codigo
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;
    var resultado = document.querySelector(".resultado").innerHTML;

}
function fibra(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.resultado = function() {
        return (this.num1) - (this.num2);
    }
    this.status = function() {
        if (this.resultado() == 1) {
            return "fibra 01";
        } else if (this.resultado() == 2) {
            return "fibra 02";
        } else if (this.resultado() == 3) {
            return "fibra 03";
        }
    }
}

function calc() {
    var num1 = document.getElementById("num1").Value;
    var num2 = document.getElementById("num2").Value;

    var f1 = new fibra(num1, num2);
    document.getElementById("resultado").innerHTML = "resultado: " + f1.resultado();
}*/