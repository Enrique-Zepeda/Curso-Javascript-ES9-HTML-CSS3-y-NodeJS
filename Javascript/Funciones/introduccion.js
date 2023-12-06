// Funciones
// las funciones se pueden escribir de dos formas con la palabra
// reservada de function seguido del nombre de la funcion(){} 

function iterar(){
    const numeros = [1, 2, 'hola', 4, 5]

    for (let i = 0; i < numeros.length; i++ ) {
        console.log(numeros[i])
    }
}
// iterar() asi se llama a la funcion
iterar()

console.log("Otra forma de iterar");
console.log("--------------------");
// argumentos de una funcion

function iterar2(arg1){
    for (let i = 0; i < arg1.length; i++ ) {
        console.log(arg1[i])
    }
}

const numeros2 = [1, 2, 'hola', 4, 5]
const nombres = ['pedro', 'juan', 'felipe', 'kike', 'amlo']

iterar2(nombres)
iterar2(numeros2)