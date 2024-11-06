// Extraer todos los elementos para algo especifico.
let numeros = [10,20,30,40,50];

let sumaNumeros = 0;
for(let i = 0; i < numeros.length ; i++){
    sumaNumeros = sumaNumeros + numeros[i];
    //sumaNumeros += numeros[i]; // <--- IGUAL QUE ARRIBA PERO DIFERENTE Sintaxis
} 
let promedio = sumaNumeros / numeros.length;
console.log(promedio)
