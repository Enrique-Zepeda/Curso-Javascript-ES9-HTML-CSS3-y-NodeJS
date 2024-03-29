const loadInitialTemplate = () => {
    const template = `
    <h1>Usuarios</h1>
    <form id="user-form">
        <div>
            <label>Nombre</label>
            <input name="name" />
        </div>
        <div>
            <label>Apellido</label>
            <input name="lastName" />
        </div>
        <button type="submit">Enviar</button>
    </form>
    <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/users')
    const users = await response.json()
    console.log(users)
    const template = user => `
    <li>
        ${user.name} ${user.lastName} <button data-id="${user._id}">Eliminar</button>
    </li>
    `
    const userList = document.getElementById('user-list')
    userList.innerHTML = users.map(user => template(user)).join('')
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            console.log(`Deleting user with ID ${user._id}`);
            await fetch(`/users/${user._id}`,{
                method: 'DELETE',
            })
            userNode.parentNode.remove()
            alert('Eliminado con exito')
        }
    })
}

const addformListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit =  async (e) => {
    e.preventDefault()
    const formData = new FormData(userForm)
    // console.log(formData.get('name'))
    const data = Object.fromEntries(formData.entries())
    // console.log(data)
    await fetch('/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    userForm.reset()
    getUsers()
    }
}

window.onload = () => {
    loadInitialTemplate()
    addformListener()
    getUsers()
}