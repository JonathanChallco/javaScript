// cargar una nueva propiedad

let persona = {
    nombre : "Ezequiel", // es importante la " , " y los " : "
    apellido : "Diaz",
    edad : 30 ,// no es necesario pones " , " al final del objeto
    coloresFavoritos : ["Azul", "Amarillo"] // <-- Se puede agregar Arrays
};

persona.deporteFavorito = "Futbol"; // <-- Agregamos una propiedad nueva
persona.edad = 31;  // <--- Modificamos una propiedad

console.log(persona);