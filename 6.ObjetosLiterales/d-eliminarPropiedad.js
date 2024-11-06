// Eliminar una nueva propiedad  usando "delete"

let persona = {
    nombre : "Ezequiel", // es importante la " , " y los " : "
    apellido : "Diaz",
    edad : 30 ,// no es necesario pones " , " al final del objeto
    coloresFavoritos : ["Azul", "Amarillo"], // <-- Se puede agregar Arrays
    deporteFavorito : "Futbol"
};

console.log(persona);

delete persona.deporteFavorito; //<--- Eliminamos una propiedad del objeto

console.log(persona);