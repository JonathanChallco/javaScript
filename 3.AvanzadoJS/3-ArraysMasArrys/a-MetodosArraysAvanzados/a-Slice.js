// .slice() Devuelve una copia de una porcion de un array
/* Sintaxis:
let newArray = arrayOriginal.slice(inicio,fin) 
// inicio -> si es negativo devuelve el dato desde atras , si no tiene dato inicia de 0 , si no supera el valor del array devuelve vacio el array
//fin -> es opcional, no se contempla el ultimo dato dado es decir si se puso 4 - devolvera hasta 3
*/

let frutas = ["Manzada", "Naranja", "Platano", "Fresa", "Kiwi"];
console.log("Arrays de Frutas", frutas)


let primerasTres = frutas.slice(0,3);
console.log(".slice(0,3)", primerasTres);

let desdeNaranja = frutas.slice(1);
console.log(".slice(1)", desdeNaranja);

let ultimasDos = frutas.slice(-2);
console.log(".slice(-2)", ultimasDos);

let entreDosIndices = frutas.slice(-3,4);
console.log(".slice(-2,4)", entreDosIndices); //  El fin no se imprime pero si 
