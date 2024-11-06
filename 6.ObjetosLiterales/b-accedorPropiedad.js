// Acceder a las propiedades de un objeto

let persona = {
    nombre : "Ezequiel", // es importante la " , " y los " : "
    apellido : "Diaz",
    edad : 30 ,// no es necesario pones " , " al final del objeto
    coloresFavoritos : ["Azul", "Amarillo"] // <-- Se puede agregar Arrays
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona.coloresFavoritos[0]); 