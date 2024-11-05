// Busca el elemento de Atras para adelante, devuelve la posicion de elemento
// Si hay elementos repetidos, devuelve la posicion del primero que encuentre

let clubes = ["Racing", "Boca", "Lanus", "Boca"];

// Encuentra primer elemento de atras para adelante
let posicionEncontradada = clubes.lastIndexOf("Boca");
console.log(posicionEncontradada);

// No encuentra el elemento y devuelve -1
let posicionNoEncontradada = clubes.lastIndexOf("River");
console.log(posicionNoEncontradada);