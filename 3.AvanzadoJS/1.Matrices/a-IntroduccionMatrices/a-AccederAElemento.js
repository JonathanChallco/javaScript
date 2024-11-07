// acceder a un elemento especifico // Modificar a un elemento especifico
let matriz = [ 
    [1,2,3], // Fila 0
    [4,5,6], // Fila 1
    [7,8,9]  // Fila 2
];

console.table(matriz);

// Acceder a un elemento especifico -----------------------------------------------
console.log(matriz[1][1]) // (matriz[fila][columna])

// Modificar elemento especifico --------------------------------------------------
matriz[0][1] = 15;// (nombreDeVariable[fila][columna])

console.table(matriz)