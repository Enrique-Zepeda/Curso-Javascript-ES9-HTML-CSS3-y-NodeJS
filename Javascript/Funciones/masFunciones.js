// Mas funciones
// si a todas las funciones no le indicamos un valor de retorno nos va a mostrar undefined

function suma(a,b) {
    return a + b
}

const resultadoSuma = suma(5,5)
const resultadoSuma2 = suma(5,6)
const resultadoSuma3 = suma(resultadoSuma,resultadoSuma2)

console.log('Resultado:', resultadoSuma);
console.log('Resultado:', resultadoSuma2);
console.log('Resultado:', resultadoSuma3);