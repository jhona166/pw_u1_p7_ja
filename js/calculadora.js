var num1 = 0;
var num2 = 0;
var operacion = "";

function setearValor(valor) {
    
    let valorActual = document.getElementById("id-display").innerText;
    console.log(valorActual);
   
    document.getElementById("id-display").innerText =valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById("id-display").innerText;
    console.log(valorActual);
  
    document.getElementById("id-display").innerText = ''+valorActual+valor;
}

function recibirValor(valor){
    console.log(valor);
    if(num1===0){
    num1 = valor;
    setearValor(num1)
    }else if(operacion===""){
        num1+=valor;
        setearValor(num1);
    }else{
        num2 = parseFloat(valor);
        setearValorConcatenado(valor) 
    }
    console.log(num1);

}
function evaluarOperacion(op){
    operacion = op;
    setearValorConcatenado(op);
}

function igual(){
    let valorFinal;
    num1 = parseFloat(num1);
    if(operacion==='+'){
        valorFinal = num1+num2;
    }else if(operacion==='-'){
        valorFinal = num1-num2;
    }else if(operacion==="X"){
        valorFinal = num1*num2;
    }
    else if(operacion==="%"){
        if( num2===0){
            setearValor('Error de sintaxis!')
        return;
        }
        valorFinal=num1/num2;
    }
    setearValor(valorFinal);
}

function limpiarDisplay() {
    num1 = 0;
    num2 = 0;
    operacion = '';
    setearValor('0');
}



function eliminar(){
    let valorActual=document.getElementById('id-display').innerText;
    if(valorActual.length>1){
        let valorNuevo  = valorActual.slice(0,-1);
        setearValor(valorNuevo);
        if(operacion===''){
            num1= valorNuevo;

        }else{
            num2 = parseFloat(valorNuevo);
        }
    }else{
        setearValor('0');
        num1=0;
        num2=0;
    }
}


 