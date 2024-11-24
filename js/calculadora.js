var num1 = 0;
var num2 = 0;
var operacion = "";

function setearValor() {

    let valorActual = document.getElementById("id-display").innerText = valor;
    console.log(valorActual);
    document.getElementById("id-display").innerText = valor;
}

function setearValorConcatenado() {
    let valor = document.getElementById("id-display").innerText = valor;
    console.log(valorActual);
    document.getElementById("id-display").innerText = valorActual + valor;
}

function recibirValor(){
    console.log(valor)
    if(num1==null){
        num1=valor
        setearValor(num1)
    }
}





function sumar(num1, num2) {
    return num1 + num2
}
function sumarNumeros() {
    var numero1 = convertir('idNum1')
    var numero2 = convertir('idNum2')
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(numero1, numero2)
}
function restar(num1, num2) {
    return num1 - num2
}
function restarNumeros() {
    var numero1 = convertir('idNum1')
    var numero2 = convertir('idNum2')
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + restar(numero1, numero2)
}
function multiplicacion(num1, num2) {
    return num1 * num2
}
function multiplicarNumeros() {
    var numero1 = convertir('idNum1')
    var numero2 = convertir('idNum2')
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicacion(numero1, numero2)
}
function convertir(idCampo) {
    return parseInt(document.getElementById(idCampo).value)
}

