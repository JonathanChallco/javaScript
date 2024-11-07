// Recorrer una columna especifica // Recorrer una fila especifica
let matriz = [ 
    [1,2,3], // Fila 0
    [4,5,6], // Fila 1
    [7,8,9]  // Fila 2
];

console.table(matriz);

// Recorrer una columna especifica
for(let i = 0 ; i < matriz.length ; i++){
    console.log(matriz[i][0]);
}

// Recoorer una fila especifica
for(let i = 0 ; i < matriz[0].length ; i++){ // especificamos la fila que queremos recorrer "matriz[0].length"
    console.log(matriz[0][i]);
}