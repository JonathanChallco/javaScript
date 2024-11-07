// .split()
// Divide un string en distinta partes
// Debe recibir por un String que utilizara como separador
// Devuelte un array con las distintas partes del String

let saludo = "Hola, como estas?";
console.log(saludo); // Nada

console.log(saludo.split(" ")); // <--- Separa todas las palabras y lo devuelve en array

let arrayNuevo = saludo.split(", "); // <--- Separa en donde le pasamos el parametro (", ")
console.log(arrayNuevo);