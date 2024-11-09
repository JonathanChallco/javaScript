// funcion que recorre array ejecuta un callback

function procesarArray(array, callbacks){

    for(let i = 0 ; i < array.length ; i++){
        callbacks(array[i]);
    }
}

// Funcion de callbaks que muestre los elementos del array------------
function mostrarElemento(elemento){
    console.log(elemento);
}

// Crear nuestro Array

let miArray= [1,2,3,4,5];

// llamada a la funcion procesarArray
console.log("Recorrido de Array")
procesarArray(miArray,mostrarElemento);

// EJEMPLO X 2 --------------------------------------------------------

function multiplicarPorDos(elemento){
    console.log(elemento*2);
}

function calcularCuadrado(elemento){
    console.log(elemento*elemento)
}

// Llamada de la funcion
console.log("Multiplicacion por 2")
procesarArray(miArray,multiplicarPorDos);

console.log("Cuadrado de cada Elemento")
procesarArray(miArray,calcularCuadrado);