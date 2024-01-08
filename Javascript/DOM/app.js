const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
        // mostrar el arreglo con for
        // todoList.innerHTML = '';
        // for(let i = 0 ; i < todos.length; i++){
        //     todoList.innerHTML += '<li>' + todos[i] + '</li>';
        // }
        // mostrar el arreglo con .map
        // la t es lo que vamos estar iterando
        // const todosTemplate = todos.map(t => {
        //     return '<li>' + t + '</li>'
        // })
        // console.log(todosTemplate)
        // version simplificada de .map
        const todosTemplate = todos.map(t => '<li>' + t + '</li>');
        // con la funcion join() vamos a poder todos los elemntos de un arrreglo y juntarlos
        todoList.innerHTML = todosTemplate.join('')
        // querySelectorAll funciona como getElementById solo que ahora tendremos que pone # para agarrar todos los elementos
        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i) => {
            elemento.addEventListener('click', () => {
                // eliminar en html
                elemento.parentNode.removeChild(elemento)
                todos.splice(i,1)
                actualizaTODOS(todos)
                render()
                console.log(todos,i)
                // console.log(elemento.parentNode, i)
            })
        })
}

const actualizaTODOS = (todos) =>{
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todotext = todo.value;
        todo.value = '';
        todos.push(todotext);
        actualizaTODOS(todos)
        console.log(todotext);
        render()
    }
}