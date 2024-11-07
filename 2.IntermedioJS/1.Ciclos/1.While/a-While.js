const prompt = require("prompt-sync")();
// agregamos contador
let contar = 0;
// -----------Estructura------------
/*  
Mientras
while(condicion){
    bloque de codigo
    (variable contador) ++ // <---- + 1
}
*/
// ---------------------------------

while(contar<=5){
    console.log("El contador es:", contar,";")
    contar++;
}