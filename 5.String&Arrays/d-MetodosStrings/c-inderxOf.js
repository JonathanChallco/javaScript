//.inderxOf()
// Busca en el string el String que le pasemos por parametro
// No torna el primer string encontrado y si no lo encuentra devolvera -1
let saludo  = "¡Hola¡ Estamos programando"

console.log(saludo.indexOf("o")); // <-- Devuelve el numero del elemento en el que se encuentra la string , solo el primero

console.log(saludo.indexOf("Estamos")); // <-- La ruta es mas especifica

console.log(saludo.indexOf("z")); // <--Devuelve -1 porque no lo encuentra

