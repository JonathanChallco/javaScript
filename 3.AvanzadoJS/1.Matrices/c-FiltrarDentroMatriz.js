// Recorrido por la totalidad de los datos con doble for
// un for externo para las FILAS y un for interno para las COLUMNAS

let matriz = [ 
    [1,2,3], // Fila 0
    [4,5,6], // Fila 1
    [7,8,9]  // Fila 2
];

// Imprimir los elementos pares
for (let i = 0 ; i < matriz.length ; i++){ // i = 0
    for (let j = 0 ; j < matriz.length ; j++){ // j = 0
        if (matriz[i][j] % 2 == 0) // <-- el resultado del modulo es igual a 0 es par
            console.log(matriz[i][j]);
    }
}

// Imprimir los elementos impares
for (let i = 0 ; i < matriz.length ; i++){ // i = 0
    for (let j = 0 ; j < matriz.length ; j++){ // j = 0
        if (matriz[i][j] % 2 == 1) // <-- el resultado del modulo es igual a 1 es inpar
            console.log(matriz[i][j]);
    }
}

// EJEMPLO Con so lo 2 elementos
let matriz2 = [ 
    [1,2,3], // Fila 0
    [4,5,6], // Fila 1
];

for (let i = 0 ; i < matriz2.length ; i++){ // Filas 
    for (let j = 0 ; j < matriz2[i].length ; j++){ // Columna // El cambio se hace sobre la variable "matriz2" [i] señalanado la FILA que quiere recorrer
        if (matriz[i][j] % 2 == 0) 
            console.log(matriz[i][j]);
    }
}

// Se adapta a cualquier tamañana de matriz que se desee manipular