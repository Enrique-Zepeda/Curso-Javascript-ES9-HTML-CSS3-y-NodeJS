window.onload = () => {
const parrafo = document.getElementById('text')
// console.log(parrafo.innerText)
// con esto podemos cambiar el contenido de nuestra pagina de forma dinamica pero no se cambia en el html
// parrafo.innerText = 'Texto actualizado'
// con esto vamos a poder agregar html
parrafo.innerHTML= '<li>elemento 1</li><li>elemento 2</li>'

}