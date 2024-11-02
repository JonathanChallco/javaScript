const prompt = require("prompt-sync")();

/* --------------------Estructura ----------------------
for (inicialización; condición; incremento) {
  // Código a ejecutar en cada iteración
}
*/ 
let i;

for( i = 0 ; i <= 10; i++ ){ // se puede poner la variable por dentro (let i = 0) 
    // (i++) = +1 
    // (i+=2) = Salda de 2 en 2 
    // (i--) contador para atras
    // (i-=2) de par en para para atras
    console.log("Iteracion nro: ", i);
} 