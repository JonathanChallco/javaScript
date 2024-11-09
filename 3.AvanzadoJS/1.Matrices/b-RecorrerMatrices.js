// Recorrer la totalidad de los datos de la matriz

let matriz = [ 
    [1,2,3], // Fila 0
    [4,5,6], // Fila 1
    [7,8,9]  // Fila 2
];

console.table(matriz);

// Recorrer la totalidad de los datos de la matriz
// Recorrer Columna --> i
// Recorrer Fila --> j

for(let i= 0 ;i < matriz.length ; i++){ // For es pra recorrer las FILAS

    for(let j = 0 ; j < matriz.length ; j++){ // For para recorrer las COLUMNAS
        console.log(matriz[i][j]) // variable[FILA][COLUMNA]
    }
}