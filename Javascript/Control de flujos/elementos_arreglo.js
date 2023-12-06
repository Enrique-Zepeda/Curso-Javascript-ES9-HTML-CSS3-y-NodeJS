// como aceder a un elemento de un arreglo

const numeros = [1,2,3,4,5]
const numerosa = [1,2,'hola',4,5]

// para hacer a un arreglo siempre se inicia desde 0
// 1 2 3 4 5
// 0 1 2 3 4
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

console.log('aqui comienza el for')

// usamos el .length para obtener le largo del arreglo
for (let i = 0; i < numerosa.length ; i++ ) {
    console.log(numerosa[i])
}