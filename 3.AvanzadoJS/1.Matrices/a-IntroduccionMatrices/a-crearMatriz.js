// Crear una matriz

// Opcion 1 ya creada--------------------------------------------------------------
let matriz = [ 
    [1,2,3], // Fila 0
    [4,5,6], // Fila 1
    [7,8,9]  // Fila 2
];

// Opcion 2 agregando los arrays en la matriz--------------------------------------
let arrayMatriz = [];
let fila1= ["x0", "x1", "x2"];
let fila2= ["y0", "y1", "y2"];

// agregamos los arrys a la variable "arrayMatriz"
arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;


// Visualizar una Matriz opcion 1----------------------------------------------------
console.log(matriz); //>> Visualmente no es agradable
console.table(matriz); //>> Visualmente es agradable


// Visualizar una Matriz opcion 2-----------------------------------------------------
console.log(arrayMatriz); //>> Visualmente no es agradable
console.table(arrayMatriz); //>> Visualmente es agradable
