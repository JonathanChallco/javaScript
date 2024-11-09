// Funciones Expresadas
// Asignadas a una variable o Asignada a una expresion 

// console.log(resta(10,5)) // Rompe - No corre

let resta = function (num1,num2){
    return num1 - num2;
}


console.log(resta(10,5))

// NO Se puede llamar a la funcion antes de su declaracion(No fue inicializada), ya que se deberia llamar a la variable donde esta la funcion

// Utilizadas cuando se busca flexibilidad a las variables