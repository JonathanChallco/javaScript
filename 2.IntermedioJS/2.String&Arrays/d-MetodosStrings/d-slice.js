// .slice()
// Corta el String y devuelve una parte

let frase = "Hola! ¿Como estas?";

// Opcion 1 <--- Donde comenzar y donde terminar
console.log(frase.slice(6,11)); //<-- Devuelve el pedazo cortado (6-11) "¿Como"

// Opcion 2 <--- Damos vamor de inicio pero no le damos de cierre
console.log(frase.slice(6))//<-- Devuelve a partir de 6 en lo que quede de String "¿Como estas?"

// Opcion 3 <-- Dar valores negativos
console.log(frase.slice(-10)); // <--- Cuenta desde atras para adelante "omo estas?"
