const prompt = require("prompt-sync")();

let control = "si";
let nota;
let sumaNotas = 0;
let cant = 0;

console.log("Bienvenido al registro de Notas!");

while(control.toLowerCase() == "si"){
    console.log("Ingrese una nota a sumar:");
    nota = parseInt(prompt("Nota alumno: "));

    sumaNotas = sumaNotas + nota;
    
// cantidad de veces que el while 
    cant++;

    control = prompt("Ingrese 'si' si desea agregar más notas, o 'no' si no desea agregar mas notas: ")
}

let promedio = sumaNotas / cant;

console.log("El promedio es : ", promedio)