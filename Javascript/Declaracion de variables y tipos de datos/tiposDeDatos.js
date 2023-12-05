console.log('tipos de datos');

// este es un comentario.
// String: cadena de caracteres 'a' 'hola' 'hola mundo' "a" "hola" "hola mundo".
// Boolean: true o false.
// Null: nulo. es una variable que se encuentra definida pero es nula
// Number: cualquier numero 1213 213 33 1.
// undefined. es una variable que no esta definida
// Object: es un objeto y agrupa todo los datos.

// Definicion de variables
// var
// let
// const

// var miPrimeraVariable = "lala"

let miPrimeraVariable = "Mi primera variable"
console.log(miPrimeraVariable);

// mutabilidad
miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable);

// booleano
let miBoolean = true
let miOtroBoolean = false

let miNumero = 117,otroNumero=118,negativo=-888
console.log(miNumero,otroNumero,negativo,miBoolean)

let undef
console.log(undef);

let nulo = null
console.log('Nulo',nulo);

// Objeto 
// Un objeto es una agrupacion de datos y esos datos hacen sentidos entre si
// Objeto vacio
const miPrimerObjeto = {

}
// Objeto
const miObjeto = {
    unNumero: 13,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

console.log(miObjeto)
// para imprimer una propiedad del objeto escribimos el nombre del objeto seguido de un punto . y despues el nombre de la propiedad que queremos imprimir
console.log(miObjeto.unNumero)

// Arreglo array
// Arreglo vacio
const arrVacio = []
const arr = [1, 2, 'hola', 'mundo' , miObjeto]

// console.log(arrVacio, arr);

// agregar mas elementos al arreglo
arr.push(5);

console.log(arr);

arrVacio.push(1)
arrVacio.push(2)
arrVacio.push(3)
arrVacio.push(4)
arrVacio.push(5)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)

console.log(arrVacio)

arrVacio.pop()

console.log(arrVacio)