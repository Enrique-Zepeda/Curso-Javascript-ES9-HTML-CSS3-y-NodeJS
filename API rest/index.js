const mongoose =  require('mongoose')

mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'chanchito feliz', edad: 25})
    const savedUser = await user.save()
    console.log(savedUser)
}

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

const buscar = async () => {
    const user = await User.find({username: 'chanchito feliz'}) //find nos va a devolver un arreglo
    console.log(user)
}

const buscarUno = async () => {
    const user = await User.findOne({username: 'chanchito triste'}) //findOne va a devolver un objeto siempre y cuando lo encuentre si no lo encuentra nos va devolver NULL
    console.log(user)
}

const actualizar = async () => {
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
    user.edad = 30
    await user.save()
}

const eliminar = async () => {
    const user = await User.deleteOne({username: 'chanchito triste'})
    console.log(user)
}

// crear()
// buscarUno()
// buscarTodo()
// buscar()
actualizar()
// eliminar()