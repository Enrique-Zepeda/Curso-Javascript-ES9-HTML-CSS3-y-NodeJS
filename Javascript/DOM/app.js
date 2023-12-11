const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todotext = todo.value;
        todo.value = '';
        todos.push(todotext);
        console.log(todotext);
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
    }
}