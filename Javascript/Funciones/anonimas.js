// Funciones anonimas
// una funcion anonima es la que no tiene nungun nombre

function sumar(a, b, cb) {
    r = a + b
    cb(r)
}

sumar(2, 3, function(r) {
    console.log("Soy una funcion anonima y mi resultado es:",r)
})