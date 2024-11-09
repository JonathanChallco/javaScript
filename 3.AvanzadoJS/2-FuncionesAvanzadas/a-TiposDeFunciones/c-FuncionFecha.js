// Funciones Flecha ( Arrow Functions)

//console.log(multiplicacion(4,3)) // Da error - No corre

let multiplicacion = (num1,num2) =>{
    return num1 * num2;
}
console.log(multiplicacion(4,3))

//Arrow function no funciona con metodos de objetos 

let objeto = {
    valor : 10,
    doble : () => { // funciona con "function" y no con el "=>" // resultado NaN
        return this.valor * 2;
    }
}
console.log(objeto.doble())

// Sirven para funciones simples 