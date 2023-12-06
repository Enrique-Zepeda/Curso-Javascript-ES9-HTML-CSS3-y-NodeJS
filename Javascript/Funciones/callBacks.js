// Un callback es una funcion que se va a ejecutar al final de una funcion

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result){
    console.log('Resultado:', result)
}

sumar(2, 3, callback)