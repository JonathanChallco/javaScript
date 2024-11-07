// Busca en el Array el elemento que mandemos por parametro
// Retorna el indice de su ubicacion, si no lo encuentra retorna -1
let frutas = ["Manzana","Banana", "Frutilla"];

//Encuentra el Elemento
let indiceEncontrado = frutas.indexOf("Banana");
console.log(indiceEncontrado);

//No encuentra el Elemento. Devolvera -1
let indiceNoEncontrado = frutas.indexOf("Anana");
console.log(indiceNoEncontrado);
