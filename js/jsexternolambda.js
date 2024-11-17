const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}

const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}

const agregarElemento = (idelemento, elementohtml) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementohtml;
}

const conceptosJS = () => {
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
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
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

    const numerosImpares = [1, 3, 5, 7, 9, 11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares)

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia)
        if (dia === 'Viernes') {
            console.log('Al fin viernes');

        } else {
            console.log('Aun no llega Viernes');
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: "Jhonatan",
        apellido: "Altamirano",
        edad: 25,
        genero: "Masculino",
        cuidadNacimiento: "Quito"
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 24) {
        console.log('Tiene 24 ');

    } else {
        console.log('Ya no tiene 24');

    }

    miEstudiante.apellido = "Marin";
    console.log(miEstudiante.apellido);

    //Declaraciones de atributos pero como objetos
    const miProfesor = {
        nombre: "Daniel",
        apellido: 'Tobar',
        edad: 30,
        dirreccion: {
            calle: "Av. America",
            casa: "120",
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

    if (miProfesor.edad === miProfesor.estatura) {
        console.log('Son iguales');
    } else {
        console.log('Estos no son lo mismo');
    }

    //Arreglo de objetos

    const est1 = {
        nombre: "Jhonatan",
        apellido: "Altamirano",
        edad: 25
    }
    const est2 = {
        nombre: "Grace",
        apellido: "Analuisa",
        edad: 25
    }
    const est3 = {
        nombre: "Karol",
        apellido: "Analuisa",
        edad: 28
    }
    const est4 = {
        nombre: "Lenin",
        apellido: "Caroa",
        edad: 19
    }

    const arregloEstudiantes = [est1, est2, est3, est4];

    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstudiante2 = [{ nombre: "Carlos", apellido: "Tobar", edad: 25 },
    { nombre: "Anita", apellido: "Teran", edad: 30 },
    { nombre: "Andrea", apellido: "Andrade", edad: 31 },
    { nombre: "Daniel", apellido: "Correa", edad: 30 },
    { nombre: "Karla", apellido: "Castillo", edad: 31 }
    ];

    console.log(arregloEstudiante2);
    console.table(arregloEstudiante2);

    //uso del pop
    console.log("uso del pop");
    const estudiante = arregloEstudiante2.pop();
    console.log(estudiante);
    console.table(arregloEstudiante2);

    //Desestructuracion de arreglos
    const colores = ['Amarillo', 'Azul', 'Verdo', 'Rojo', 'Rosado'];

    const [c1, c2, c3, c4, c5] = colores;

    console.log(c1);
    console.log(c5);
    console.log(c3);

    const [m1, m2, m3, m4, m5, m6, m7, m8] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m8);



    const [mes2, mes5] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

    console.log(m2);
    console.log(m5);

    const [, mess2, , , mess5] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

    console.log(m2);
    console.log(m5);

    //Desestructuracion de objetos
    console.log('Desestructuracion de objetos ');
    const automovil = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2024,
        color: 'plateado'
    }
    const automovil2 = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2024,
        color: 'plateado'
    }
    /*
        const {marca,modelo,anio,color} = automovil;
        console.log(marca); 
        console.log(modelo);
        console.log(anio);
        console.log(color); 
    */

    desestructuracion(automovil);

    const { nombrep, raza, estatura } = { nombre: "Perro", raza: "pastor", estatura: 120 }
    console.log(nombrep);
    console.log(raza);
    console.log(estatura);

    //declaren un objeto con un atributo complejo(con un atributo de tipo objeto)
    //y vamos a estructurar en especial el atributo tipo objeto 
    const miProfesor1 = {
        nombre: "Daniel",
        apellido: 'Tobar',
        edad: 30,
        dirreccion: {

        }
    }


    const { nombre1, apellido1, edad1, direccion1 } = {
        nombre1: "Daniel", apellido1: "Lopez", edad1: "Av. America", direccion1: {
            calle: "Av. America",
            casa: "120",
            barrio: "Rumipamba"
        }
    };
    console.log(apellido1);
    console.log(direccion1);

    //Ejemplo inge
    const universidad = {
        nombre: "Uce",
        estudiantes: 100000,
        rector: {
            nombreR: "Juan",
            apellidoR: "Perez",
        
        }

    }
    /*
    const {estudiantes,rector} =universidad
    console.log(estudiantes);
    console.log(rector);
*/

    //En dos pasos
    /*
    const { estudiantes, rector } = universidad
    const{nombreR,apellidoR} = rector;

    console.log(nombreR);
*/
    const{estudiantes,rector:{nombreR,apellidoR}}=universidad;
    console.log(nombreR);
    console.log(apellidoR);
    
    
}
//const desestructuracion=(automovil)=>{}

const desestructuracion = ({ modelo, anio, color, marca }) => {
    console.log('Entro al metodo de desestructuracion')
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}