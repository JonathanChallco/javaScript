// Crar un Array (Arreglo)
let edades = [24, 37, 18, 59, 7];
let nombre = ["Juana", "Raul", "Alan"];
let booleanos = [true, false, false. true];
let combinados = [15, "hola", true];

// Acceder a un elemento específico de un array
console.log(edades[2]); // 0=24 - 1=37 - 2=18 - 3=59 - 4=7 
console.log(nombre[1]);
console.log(booleanos[0]);
console.log(combinados[1]);

// Recorrer un array
for(let i = 0; i < nombre.length ;i++){ // length devuelve la cantidad de cosas dentro del array (Arreglo)
    console.log(nombre[i]); // recorre el array por la cariable [i]
}