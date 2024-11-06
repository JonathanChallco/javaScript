// Acceder a un metodo de un objeto (cuanto se agrega una funcion pasa a nombrarse metodo)

let persona = {
    nombre : "Ezequiel", // es importante la " , " y los " : "
    apellido : "Diaz",
    edad : 30 ,// no es necesario pones " , " al final del objeto
    coloresFavoritos : ["Azul", "Amarillo"], // <-- Se puede agregar Arrays
    deporteFavorito : "Futbol",
    // Funcion
    saludar : function(){
        return "Hola, como estas? Soy ezequiel"
    }
};

let saludoRecibido = persona.saludar(); 

console.log(saludoRecibido); // <---- Accedemos a la funcion