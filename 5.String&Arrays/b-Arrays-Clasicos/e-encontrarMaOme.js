// Encontrar el mayor o menor
let numeros = [10,48,7,52,19];

let menor = numero[0];

// busca el menor

for(let i = 0 ; i < numeros.length ; i++){
    if (numeros[i] < menor){ // cuando entra al elemento menor al primer elemento igualado (10), si se cumple la condicion pisa el dato principal
        menor = numero[i]
    }
}

// busca el mayor
// solo cambiar la condicion en el if > (mayor que) devolvera el mayor