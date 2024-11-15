const cambiarTexto = (idelemento,valor)=>{
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento,color)=>{
    document.getElementById(idelemento).style.color = color;
}

const cambiarTamanio = (idelemento,tamanio)=>{
    document.getElementById(idelemento).style.fontSize = tamanio;
}

const agregarElemento = (idelemento,elementohtml)=>{
    document.getElementById(idelemento).innerHTML= document.getElementById(idelemento).innerHTML+elementohtml;
}

const conceptosJS = ()=>{
    /*Tipos de variables en JS 
    var:globales, ya no se usa communmente el tipo de dato var
    let: local a nivel de funcion, dentro del bloque{}, no permite volver a declarar la variable en el mismo bloque
    const: se utilizan para variables cuyo valor no cambian


    let=String double int
    Si utilizo constante con MAYUS
    */
    let nombre = "Jhonatan";
    let numero1 = 10;
    let numero2 = 15;
    const PI = 3.14;
    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("Entro al metodo de calculo");
    
    /*Declaracion de arreglos*/
    const diasSemana= ['Lunes','Martes','Miercoles','Jueves','Viernes']
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);
    //Dentro de JS el concepto de nulo o no existencia se lo conoce como: undefined
    //null!==undefined

    //Para comparaciones
    //igualdad ===
    //diferencia !==

    //push guarda al final del arreglo
    diasSemana.push('Sabado');
    console.log(diasSemana);

    //Agrega al inicio 
    diasSemana.unshift('Dias');
    console.log(diasSemana);

    const numerosImpares = [1,3,5,7,9,11];
    console.log(numerosImpares);

    const numerosPares = [2,4,6,8,10];
    console.log(numerosPares)

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for(const dia of diasSemana){
        console.log(dia)
        if(dia==='Viernes'){
            console.log('Al fin viernes');

        }else{
            console.log('Aun no llega Viernes');
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre:"Jhonatan",
        apellido:"Altamirano",
        edad:25,
        genero:"Masculino",
    cuidadNacimiento:"Quito"
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if(miEstudiante.edad===24){
        console.log('Tiene 24 ');

    }else{
        console.log('Ya no tiene 24');

    }
     
    miEstudiante.apellido="Marin";
    console.log(miEstudiante.apellido);

    //Declaraciones de atributos pero como objetos
    const miProfesor={
        nombre:"Daniel",
        apellido:'Tobar',
        edad:30,
                dirreccion:{
            calle:"Av. America",
            casa:"120",
            barrio: "Rumipamba"
        }
    }
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.dirreccion);
    console.log(miProfesor.dirreccion.calle)

    miProfesor.dirreccion.calle = "10 de Agosto";
    console.log(miProfesor);
    console.log(miProfesor.edad);
    console.log(miProfesor.estatura);

    if(miProfesor.edad === miProfesor.estatura){
        console.log('Son iguales');
    }else{
        console.log('Estos no son lo mismo');
    }

    

}