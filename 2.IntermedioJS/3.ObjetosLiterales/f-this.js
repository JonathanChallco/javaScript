// .this
let persona = {
    nombre : "Ezequiel", // es importante la " , " y los " : "
    apellido : "Diaz",
    edad : 30 ,// no es necesario pones " , " al final del objeto
    coloresFavoritos : ["Azul", "Amarillo"], // <-- Se puede agregar Arrays
    deporteFavorito : "Futbol",
    // Funcion
    saludar : function(){
        return "Hola, como estas? Soy " + this.nombre; // toma el dato "Nombre" por fuera de la funcion. Comodo para no tocar la propiedad el objeto "Nombre".
    }
};

persona.nombre = "Lautaro";

console.log(persona.saludar());