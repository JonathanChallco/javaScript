//Une los elementos de un array utilizando un separador
// Si no especificamos el separador utilizara la ","

let dias = ["Lunes","Martes","Miercoles"];

let separadosPorComa = dias.join() // Toma una coma de manera predeterminada
console.log (separadosPorComa);

let separadorPorGuion = dias.join(" - ");
console.log(separadorPorGuion);