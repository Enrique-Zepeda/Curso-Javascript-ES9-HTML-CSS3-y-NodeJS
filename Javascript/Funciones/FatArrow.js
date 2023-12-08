// fat arrow function
// no se tiene que declarar con la palabra reservada function
// si nuestra funcion solo tiene una linea no ocupamos ponerle return

const miFatArrowFunction = (a, b) => a + b
const otraFAF = (a, b) => {
    return a + b
}
// console.log(miFatArrowFunction(1, 2))
// const r = miFatArrowFunction(1, 2)
const t = otraFAF(1, 2)
console.log(t)