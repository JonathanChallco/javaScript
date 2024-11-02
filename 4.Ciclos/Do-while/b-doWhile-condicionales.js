const prompt = require("prompt-sync")();

let nroAadivinar = 4;
let intento = 0;
let numero;

do {
    numero = parseInt(prompt("Intgrese un nro del 1 al 10: "));

    if( numero < nroAadivinar){
        console.log("Muy bajo, intenta nuevamente")
    }else if (numero > nroAadivinar){
        console.log("Muy alto, ingrese nuevamente")
    }else{
        console.log ("Número correcto")
    }
    intento++;
} while (numero != nroAadivinar);

console.log("Adivinaste el número en", intento, "intentos.");